import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallback?: string;
  placeholder?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallback,
  placeholder,
  className = '',
  width,
  height,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setImageState('loading');
    setCurrentSrc(src);
  }, [src]);

  const handleLoad = () => {
    setImageState('loaded');
    onLoad?.();
  };

  const handleError = () => {
    if (currentSrc !== fallback && fallback) {
      setCurrentSrc(fallback);
      setImageState('loading');
    } else {
      setImageState('error');
      onError?.();
    }
  };

  const generateFallbackSvg = () => {
    const w = width || 400;
    const h = height || 300;
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="${w}" height="${h}" fill="#f8fafc"/>
        <rect x="${w/2 - 30}" y="${h/2 - 30}" width="60" height="60" rx="8" fill="#e2e8f0"/>
        <path d="M${w/2 - 15} ${h/2 - 10}L${w/2} ${h/2 + 5}L${w/2 + 15} ${h/2 - 10}Z" fill="#94a3b8"/>
        <circle cx="${w/2 - 8}" cy="${h/2 - 15}" r="3" fill="#94a3b8"/>
        <text x="${w/2}" y="${h/2 + 25}" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="12">Image</text>
      </svg>
    `)}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imageState === 'loading' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {placeholder ? (
            <img src={placeholder} alt="Loading..." className="w-full h-full object-cover" />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-sm text-slate-600">Loading...</span>
            </div>
          )}
        </motion.div>
      )}

      {imageState === 'error' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img 
            src={generateFallbackSvg()} 
            alt="Image not available" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
      )}

      <motion.img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageState === 'loaded' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};