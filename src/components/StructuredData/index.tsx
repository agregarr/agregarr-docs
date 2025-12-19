import React from 'react';
import Head from '@docusaurus/Head';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Agregarr",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Docker, Linux, Windows, macOS",
    "description": "Agregarr is a Plex Collections manager that keeps your Home and Recommended fresh by frequently updating it with collections from various sources including Trakt, IMDb, TMDb, Letterboxd, and more.",
    "url": "https://agregarr.org",
    "softwareVersion": "latest",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Agregarr",
      "url": "https://github.com/agregarr"
    },
    "sameAs": [
      "https://github.com/agregarr/agregarr",
      "https://hub.docker.com/r/agregarr/agregarr",
      "https://discord.gg/RfEPPRQJQ2",
      "https://www.reddit.com/r/agregarr/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Agregarr",
    "url": "https://agregarr.org",
    "description": "Official documentation for Agregarr - Plex Collections Manager",
    "publisher": {
      "@type": "Organization",
      "name": "Agregarr"
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Head>
  );
}
