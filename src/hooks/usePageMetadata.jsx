import { useEffect } from 'react';

function usePageMetadata(title, description = '', keywords = '', path = '') {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title 
      ? (title.includes('Zinkly') ? title : `Zinkly | ${title}`) 
      : 'Zinkly | Custom Software Development Company in Thrissur, Kerala';
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const updateMeta = (selector, attrName, attrValue, content) => {
      let elem = document.querySelector(selector);
      if (!elem) {
        elem = document.createElement('meta');
        elem.setAttribute(attrName, attrValue);
        document.head.appendChild(elem);
      }
      elem.setAttribute('content', content);
    };

    // 2. Meta Description
    const finalDesc = description || 'Zinkly is a premier custom software development and IT company in Thrissur, Kerala. We design, engineer, and deploy high-performance web systems and MVP solutions.';
    updateMeta('meta[name="description"]', 'name', 'description', finalDesc);
    updateMeta('meta[name="title"]', 'name', 'title', formattedTitle);

    // 3. Meta Keywords
    if (keywords) {
      updateMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    }

    // 4. Open Graph
    updateMeta('meta[property="og:title"]', 'property', 'og:title', formattedTitle);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', finalDesc);
    updateMeta('meta[property="twitter:title"]', 'property', 'twitter:title', formattedTitle);
    updateMeta('meta[property="twitter:description"]', 'property', 'twitter:description', finalDesc);

    // 5. Canonical & OG URL
    const canonicalUrl = `https://www.zinklysolutions.com${path}`;
    updateMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    updateMeta('meta[property="twitter:url"]', 'property', 'twitter:url', canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, path]);
}

export default usePageMetadata;
