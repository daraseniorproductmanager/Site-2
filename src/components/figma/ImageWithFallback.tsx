import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className="flex items-center justify-center bg-gray-200 text-gray-400" {...props}>
        <span>Image failed to load</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center bg-gray-200 animate-pulse" {...props}>
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        style={{ display: loading ? 'none' : 'block' }}
        {...props}
      />
    </>
  );
}
