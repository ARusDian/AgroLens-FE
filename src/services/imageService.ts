
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export type ClassificationResponse = {
  prediction: string;
  description: string;
};

export const imageService = {
  async classifyImage(file: File): Promise<ClassificationResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_URL}/predict-image`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to classify image');
    }

    return response.json();
  },
};
