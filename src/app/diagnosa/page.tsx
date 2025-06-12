'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useChat } from '@/hooks/useChat';
import { useImageUpload } from '@/hooks/useImageUpload';
import { ImageUploader } from '@/components/diagnosa/ImageUploader';
import { ChatInterface } from '@/components/diagnosa/ChatInterface';
import { DiseasePrediction, Message } from '@/components/diagnosa/types';

const EXAMPLE_IMAGES = [
  { src: '/example_1.jpg', alt: 'Contoh penyakit padi 1' },
  { src: '/example_2.jpg', alt: 'Contoh penyakit padi 2' },
  { src: '/example_3.jpg', alt: 'Contoh penyakit padi 3' },
];

export default function DiagnosaPage() {
  // State for chat input
  const [inputMessage, setInputMessage] = useState('');


  // Use custom hooks for chat and image upload functionality
  const {
    messages,
    isLoading: isChatLoading,
    sendMessage,
    clearMessages,
  } = useChat();

  const {
    selectedImage,
    result,
    error: imageError,
    isLoading: isImageLoading,
    uploadAndClassify,
    reset: resetImageUpload,
  } = useImageUpload();
  
  const disabled = !selectedImage || !result;

  // Handle file selection for image upload
  const handleFileSelect = async (file: File) => {
    try {
      clearMessages();
      await uploadAndClassify(file);
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  // Handle reset
  const handleReset = () => {
    resetImageUpload();
    clearMessages();
    setInputMessage('');
  };

  // Handle sending a chat message
  const handleSendMessage = async (message: string) => {
    if (!message.trim() || !result || !selectedImage) return;
    
    try {
      await sendMessage(message, result.prediction);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // Handle key down for chat input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e.currentTarget.value);
    }
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const input = form.querySelector('textarea') as HTMLTextAreaElement;
    if (input) {
      handleSendMessage(input.value);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-green-400">AgroLens</h1>
      </header>

      
      <div className="bg-gray-700 rounded-lg p-6 shadow-md mb-8 max-w-4xl mx-auto">
        {/* Image Upload */}
        <div className="rounded-lg shadow-md p-6">
          <ImageUploader 
            onFileSelect={handleFileSelect}
            isLoading={isImageLoading}
            error={imageError}
          />
          

          <div className="mt-6">
            <h3 className="font-medium mb-2">Contoh Gambar</h3>
            <p className="text-gray-400 mb-2">Klik gambar di bawah untuk mencoba diagnosa dengan gambar contoh</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {EXAMPLE_IMAGES.map((img, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:opacity-80 transition-opacity group"
                  onClick={() => {
                    // Simulate file selection for example images
                    fetch(img.src)
                      .then((res) => res.blob())
                      .then((blob) => {
                        const file = new File([blob], `example${index + 1}.jpg`, { type: 'image/jpeg' });
                        handleFileSelect(file);
                      });
                  }}
                >
                  <div className='relative aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden'>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover w-full h-full"
              
                    />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {result && selectedImage && (
         <div className="bg-gray-700 rounded-lg p-6 shadow-md mb-8 max-w-4xl mx-auto">
              <div className='flex flex-col md:flex-row gap-6'>
                {/*  Preview Gambar */}
                <div className='relative aspect-[4/3] bg-gray-700 rounded-lg overflow-hidden'>
                  <img
                    src={selectedImage}
                    alt="Hasil Diagnosa"
                    className="object-cover w-full h-full"
              
                  />
                </div>
                {/* Hasil Diagnosa */}
                <div className='w-full md:w-1/2'>
                  <div className='space-y-3'>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Hasil Diagnosa</h3>
                      <p className="text-2xl font-bold text-green-400 capitalize">
                        {result.prediction.replace(/([A-Z])/g, ' $1').trim()}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 text-gray-400">Deskripsi</h3>
                      <p>{result.description}</p>
                    </div>
                    
                    <button
                      onClick={handleReset}
                      className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                      >
                      Coba Lagi
                    </button> 
                  </div>

                </div>
              </div>
            </div>
          )}

          {result && (
            <div className="bg-gray-700 rounded-lg p-6 shadow-md mb-8 max-w-4xl mx-auto">
              <ChatInterface
                messages={messages}
                isLoading={isChatLoading}
                onSendMessage={handleSendMessage}
                disabled={disabled}
              />
            </div>
          )}


    </div>
  );
}
              