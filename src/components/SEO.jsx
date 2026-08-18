import { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, schema }) => {
  useEffect(() => {
    // Set page title
    document.title = title || 'Digital Marketing Agency in Pune | DigiSevaks';
    
    // Set or update meta description
    setMetaTag('description', description || 'DigiSevaks helps Pune businesses grow with result-driven SEO, Google Ads, social media marketing & web development. Get a free marketing audit today.');
    
    // Set or update meta keywords
    setMetaTag('keywords', keywords || 'digital marketing company pune, website development company in pune, digisevaks marketing agency karve nagar, karve nagar digital marketing, best digital marketing agency in pune, top SEO company in pune, digital marketing agency near me, Google My Business optimization Pune, local SEO agency Pune, Google Ads agency Pune, Meta Ads management Pune, lead generation agency Pune, social media marketing Pune, web design agency Karve Nagar Pune, SEO agency Kothrud, digital marketing agency Baner, digital marketing agency PCMC, local business marketing Pune');
    
    // Set canonical URL
    setLinkTag('canonical', canonical || 'https://digisevaks.com/');
    
    // Open Graph tags
    setMetaProperty('og:title', ogTitle || title);
    setMetaProperty('og:description', ogDescription || description);
    setMetaProperty('og:image', ogImage || 'https://digisevaks.com/og-image.jpg');
    setMetaProperty('og:url', canonical || 'https://digisevaks.com/');
    setMetaProperty('og:type', 'website');
    setMetaProperty('og:locale', 'en_IN');
    setMetaProperty('og:site_name', 'DigiSevaks Media Agency');
    
    // Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', twitterTitle || title);
    setMetaTag('twitter:description', twitterDescription || description);
    setMetaTag('twitter:image', twitterImage || 'https://digisevaks.com/twitter-image.jpg');
    setMetaTag('twitter:site', '@digisevaks');
    
    // Additional SEO tags
    setMetaTag('author', 'DigiSevaks Media Agency');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Handle schema markup
    if (schema) {
      setSchemaMarkup(schema);
    }
    
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, schema]);
  
  const setMetaTag = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  const setMetaProperty = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };
  
  const setLinkTag = (rel, href) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };
  
  const setSchemaMarkup = (schemaData) => {
    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"][data-dynamic="true"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    
    // Add new schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.setAttribute('data-dynamic', 'true');
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);
  };
  
  return null;
};

export default SEO;
