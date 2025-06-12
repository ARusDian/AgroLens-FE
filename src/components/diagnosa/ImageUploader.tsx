import { useRef, useCallback, useState } from 'react';

type ImageUploaderProps = {
  onFileSelect: (file: File) => void;
  isLoading: boolean;
  error: string | null;
};

export const ImageUploader = ({
  onFileSelect,
  isLoading,
  error,
}: ImageUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect]
  );

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white text-center mb-5">Upload Gambar untuk Diagnosa</h2>
      <div
        className={`mt-5 border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging ? 'border-green-500 bg-gray-700' : 'border-gray-600'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileInputChange}
        />
        <div className="flex flex-col items-center justify-center space-y-4">
          <svg
            className={`w-12 h-12 ${isDragging ? 'text-green-500' : 'text-gray-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <div>
            <p className="text-gray-300 font-medium">
              {isDragging ? 'Lepaskan gambar di sini' : 'Seret dan lepas gambar di sini'}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              atau klik untuk memilih file (JPG, PNG, atau JPEG, maks. 5MB)
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-400 text-sm text-center">{error}</div>
      )}

      {isLoading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}

    </div>
  );
};
