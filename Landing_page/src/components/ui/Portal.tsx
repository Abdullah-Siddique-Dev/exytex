import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
}

export const Portal: React.FC<PortalProps> = ({ children, containerId = 'modal-root' }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Create or get the container element
    let containerElement = document.getElementById(containerId);
    let isNewElement = false;
    
    if (!containerElement) {
      containerElement = document.createElement('div');
      containerElement.id = containerId;
      containerElement.style.position = 'fixed';
      containerElement.style.top = '0';
      containerElement.style.left = '0';
      containerElement.style.width = '100%';
      containerElement.style.height = '100%';
      containerElement.style.pointerEvents = 'none';
      containerElement.style.zIndex = '99999';
      document.body.appendChild(containerElement);
      isNewElement = true;
    }

    containerRef.current = containerElement;
    setContainer(containerElement);

    return () => {
      // Only clean up if we created the element and it has no children
      if (isNewElement && 
          containerRef.current && 
          containerRef.current.parentNode === document.body && 
          containerRef.current.children.length === 0) {
        try {
          document.body.removeChild(containerRef.current);
        } catch (error) {
          // Element might have already been removed, ignore the error
        }
      }
    };
  }, [containerId]);

  if (!container) return null;

  return createPortal(children, container);
};
