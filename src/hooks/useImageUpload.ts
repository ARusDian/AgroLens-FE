import { useState, useCallback } from 'react';
import { imageService, ClassificationResponse } from '../services/imageService';

type DiseasePrediction = ClassificationResponse;

export const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiseasePrediction | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): boolean => {
    if (!file.type.match('image.*')) {
      setError('Hanya file gambar yang diizinkan');
      return false;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Ukuran file maksimal 5MB');
      return false;
    }

    return true;
  }, []);

  const uploadAndClassify = useCallback(async (file: File) => {
    if (!validateFile(file)) return null;

    try {
      setIsLoading(true);
      setError(null);
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);

      // Upload and classify
      const data = await imageService.classifyImage(file);
      
      setResult({
        prediction: data.prediction,
        description: data.description
      });

      return data;
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Gagal mengklasifikasikan gambar. Silakan coba lagi.');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [validateFile]);

  const reset = useCallback(() => {
    setSelectedImage(null);
    setResult(null);
    setError(null);
  }, []);

  return {
    selectedImage,
    isLoading,
    result,
    error,
    uploadAndClassify,
    reset,
  };
};
