// src/components/seo/StructuredData.tsx
export default function StructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "野球成績計算スタットトラッカー",
      "applicationCategory": "SportsApplication",
      "operatingSystem": "Web",
      "description": "打率、OPS、防御率などの野球個人成績を自動計算するツール。草野球や部活動に最適。",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "JPY"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    );
  }