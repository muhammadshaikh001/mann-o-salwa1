import { useEffect } from 'react';

export default function SEOSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Mann O Salwa",
      "description": "A premium multi-cuisine restaurant in Ratanpur, Gujarat, offering tandoori specialties, Kashmiri Fish, Raan, family platters, and more. Dine-in and drive-through available. Open till 1 AM.",
      "url": "[ADD YOUR WEBSITE URL HERE]",
      "telephone": "+91-97147-07576",
      "priceRange": "₹400–₹600",
      "servesCuisine": ["Indian", "Tandoori", "Multi-cuisine"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ratanpur",
        "addressLocality": "Ratanpur",
        "addressRegion": "Gujarat",
        "postalCode": "387570",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.7403786",
        "longitude": "72.708335"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
          ],
          "closes": "01:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "265",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasMap": "https://maps.google.com/?q=PPR5%2B58+Ratanpur+Gujarat",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Dine-in", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Drive-through", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Kids area", "value": true }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
