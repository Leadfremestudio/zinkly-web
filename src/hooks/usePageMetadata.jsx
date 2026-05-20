import { useEffect } from 'react';

function usePageMetadata(title, description = '') {
  useEffect(() => {
    // Set document title
    document.title = title ? `Zinkly | ${title}` : 'Zinkly - Think • Build • Connect';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.setAttribute(
      'content',
      description || 'Zinkly is a premium, high-performance IT company providing website development, custom software, automation, and consulting solutions.'
    );
  }, [title, description]);
}

export default usePageMetadata;
