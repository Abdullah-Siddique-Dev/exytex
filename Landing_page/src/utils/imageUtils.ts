// Image utility functions for handling local and fallback images

export interface ImageConfig {
  src: string;
  alt: string;
  fallback?: string;
  placeholder?: string;
}

// Hero section images - Software development related images
export const heroImages: ImageConfig[] = [
  {
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    alt: 'Programming code on computer screen',
    fallback: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzk2MCA1NzMuMTM3IDkzMy4xMzcgNjAwIDkwMCA2MDBDODY2Ljg2MyA2MDAgODQwIDU3My4xMzcgODQwIDU0MEM4NDAgNTA2Ljg2MyA4NjYuODYzIDQ4MCA5MDAgNDgwQzkzMy4xMzcgNDgwIDk2MCA1MDYuODYzIDk2MCA1NDBaIiBmaWxsPSIjY2JkNWUxIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3MzgxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+'
  },
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    alt: 'Developer working on laptop with code',
    fallback: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzk2MCA1NzMuMTM3IDkzMy4xMzcgNjAwIDkwMCA2MDBDODY2Ljg2MyA2MDAgODQwIDU3My4xMzcgODQwIDU0MEM4NDAgNTA2Ljg2MyA4NjYuODYzIDQ4MCA5MDAgNDgwQzkzMy4xMzcgNDgwIDk2MCA1MDYuODYzIDk2MCA1NDBaIiBmaWxsPSIjY2JkNWUxIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3MzgxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+'
  },
  {
    src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    alt: 'Software development workspace with multiple screens',
    fallback: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzk2MCA1NzMuMTM3IDkzMy4xMzcgNjAwIDkwMCA2MDBDODY2Ljg2MyA2MDAgODQwIDU3My4xMzcgODQwIDU0MEM4NDAgNTA2Ljg2MyA4NjYuODYzIDQ4MCA5MDAgNDgwQzkzMy4xMzcgNDgwIDk2MCA1MDYuODYzIDk2MCA1NDBaIiBmaWxsPSIjY2JkNWUxIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3MzgxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+'
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    alt: 'Mobile app development and testing',
    fallback: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzk2MCA1NzMuMTM3IDkzMy4xMzcgNjAwIDkwMCA2MDBDODY2Ljg2MyA2MDAgODQwIDU3My4xMzcgODQwIDU0MEM4NDAgNTA2Ljg2MyA4NjYuODYzIDQ4MCA5MDAgNDgwQzkzMy4xMzcgNDgwIDk2MCA1MDYuODYzIDk2MCA1NDBaIiBmaWxsPSIjY2JkNWUxIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3MzgxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+'
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    alt: 'Team collaboration on software project',
    fallback: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjZjFmNWY5Ii8+CjxwYXRoIGQ9Ik05NjAgNTQwQzk2MCA1NzMuMTM3IDkzMy4xMzcgNjAwIDkwMCA2MDBDODY2Ljg2MyA2MDAgODQwIDU3My4xMzcgODQwIDU0MEM4NDAgNTA2Ljg2MyA4NjYuODYzIDQ4MCA5MDAgNDgwQzkzMy4xMzcgNDgwIDk2MCA1MDYuODYzIDk2MCA1NDBaIiBmaWxsPSIjY2JkNWUxIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjM3MzgxIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCI+TG9hZGluZy4uLjwvdGV4dD4KPC9zdmc+'
  }
];

// Service images
export const serviceImages = {
  webDevelopment: '/images/services/web-development.jpg',
  mobileApp: '/images/services/mobile-app.jpg',
  digitalMarketing: '/images/services/digital-marketing.jpg',
  seo: '/images/services/seo.jpg',
  graphicDesign: '/images/services/graphic-design.jpg',
  support: '/images/services/support.jpg',
  ecommerce: '/images/services/ecommerce.jpg',
  cloudSolutions: '/images/services/cloud-solutions.jpg',
  uiux: '/images/services/ui-ux.jpg',
  aiml: '/images/services/ai-ml.jpg'
};

// Client/testimonial images
export const clientImages = {
  client1: '/images/clients/client-1.jpg',
  client2: '/images/clients/client-2.jpg',
  client3: '/images/clients/client-3.jpg',
  client4: '/images/clients/client-4.jpg',
  client5: '/images/clients/client-5.jpg',
  client6: '/images/clients/client-6.jpg',
  client7: '/images/clients/client-7.jpg',
  client8: '/images/clients/client-8.jpg',
  client9: '/images/clients/client-9.jpg',
  client10: '/images/clients/client-10.jpg'
};

// Utility function to handle image loading with fallbacks
export const getImageSrc = (imagePath: string, fallback?: string): string => {
  // In a real implementation, you might want to check if the image exists
  // For now, we'll return the path and let the browser handle it
  return imagePath || fallback || '/images/fallback.jpg';
};

// Generate placeholder SVG
export const generatePlaceholder = (width: number, height: number, text: string = 'Loading...'): string => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f1f5f9"/>
      <circle cx="${width/2}" cy="${height/2}" r="20" fill="#cbd5e1"/>
      <text x="${width/2}" y="${height/2 + 8}" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="14">${text}</text>
    </svg>
  `)}`;
};