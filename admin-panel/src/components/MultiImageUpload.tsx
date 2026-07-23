import React, { useRef, useState } from 'react';
import { Upload, X, Plus, Link } from 'lucide-react';
import { api } from '../services/api';

interface MultiImageUploadProps {
  values: string[];
  onChange: (urls: string[]) => void;
  label?: string;
  max?: number;
}

export const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  values,
  onChange,
  label = 'Images',
  max = 10
}) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const handleFiles = async (files: FileList) => {
    if (!files.length) return;
    setUploading(true);
    setError('');
    try {
      const form = new FormData();
      Array.from(files).forEach(f => form.append('images', f));
      const res = await api.post('/upload/images', form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      onChange([...values, ...res.data.urls].slice(0, max));
    } catch (err: any) {
      setError('Upload failed');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  const addUrl = () => {
    if (urlInput.trim() && values.length < max) {
      onChange([...values, urlInput.trim()]);
      setUrlInput('');
      setShowUrlInput(false);
    }
  };

  return (
    <div className="space-y-3">
      {label && (
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <span className="text-xs text-gray-400">{values.length}/{max} images</span>
        </div>
      )}

      {/* Existing Images Grid */}
      {values.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {values.map((url, index) => (
            <div key={index} className="relative group aspect-video">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg border border-gray-200"
                onError={e => (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60"><rect fill="%23f3f4f6" width="100" height="60"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="10">Error</text></svg>'}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 p-1 bg-red-500 hover:bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="absolute bottom-1 left-1 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Area */}
      {values.length < max && (
        <div className="space-y-2">
          <div
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-gray-300 rounded-xl p-5 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              onChange={e => e.target.files && handleFiles(e.target.files)}
              className="hidden"
            />
            {uploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-600"></div>
                <p className="text-sm text-blue-600">Uploading...</p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5">
                <Upload className="w-8 h-8 text-gray-400" />
                <p className="text-sm font-medium text-gray-600">Click or drag images here</p>
                <p className="text-xs text-gray-400">Select mul