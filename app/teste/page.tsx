"use client"

import React, { useState } from 'react';
import { getSupabaseClient } from '@/utils/supabase/client'; // Ajuste o caminho conforme a localização do seu supabaseClient.ts

const BUCKET_NAME = 'TravelsPictures'; // Nome do seu bucket no Supabase

const UploadForm: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setError(null);
      setSuccessMessage(null);
      setUploadedImageUrl(null);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita o recarregamento da página

    if (!selectedFile) {
      setError('Por favor, selecione uma imagem para fazer o upload.');
      return;
    }

    setUploading(true);
    setError(null);
    setSuccessMessage(null);
    setUploadedImageUrl(null);

    const file = selectedFile;
    const filePath = `${Date.now()}_${file.name}`; // Nome do arquivo no bucket (garante unicidade)

    const supabase = getSupabaseClient();

    try {
      const { data, error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, file, {
          cacheControl: '3600', // Cache por 1 hora
          upsert: false, // Não sobrescrever se existir
        });

      if (uploadError) {
        throw uploadError;
      }

      setSuccessMessage('Imagem carregada com sucesso!');
      // O Supabase não retorna a URL pública diretamente do .upload()
      // mas podemos construí-la.
      const publicUrl = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath).data.publicUrl;
      setUploadedImageUrl(publicUrl);

      setSelectedFile(null); // Limpa o arquivo selecionado
      
      // O trigger no banco de dados deve ter inserido essa URL na sua tabela TravelsPictures
      // Você pode adicionar um feedback aqui se quiser, como um link para a imagem.

    } catch (err: any) {
      console.error('Erro ao fazer upload:', err.message);
      setError(`Erro ao fazer upload da imagem: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Upload de Imagem para {BUCKET_NAME}</h2>
      <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label htmlFor="file-input" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Selecione uma Imagem:
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
            style={{ width: '100%', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
        </div>

        {selectedFile && (
          <p style={{ fontSize: '0.9em', color: '#555' }}>
            Arquivo selecionado: <strong>{selectedFile.name}</strong> ({Math.round(selectedFile.size / 1024)} KB)
          </p>
        )}

        <button
          type="submit"
          disabled={uploading || !selectedFile}
          style={{
            padding: '10px 15px',
            backgroundColor: uploading ? '#888' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: uploading || !selectedFile ? 'not-allowed' : 'pointer',
            fontSize: '1em',
            fontWeight: 'bold'
          }}
        >
          {uploading ? 'Enviando...' : 'Fazer Upload'}
        </button>
      </form>

      {error && (
        <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>
          {error}
        </p>
      )}

      {successMessage && (
        <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>
          {successMessage}
          {uploadedImageUrl && (
            <span>
              {' '}
              <a href={uploadedImageUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                Ver Imagem
              </a>
            </span>
          )}
        </p>
      )}
    </div>
  );
};

export default UploadForm;