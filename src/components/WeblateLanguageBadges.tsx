import React, { useEffect, useState } from 'react';

interface Language {
  code: string;
  name: string;
  url: string;
}

interface WeblateLanguageBadgesProps {
  project: string;
  component: string;
}

export default function WeblateLanguageBadges({
  project = 'agregarr',
  component = 'agregarr-frontend'
}: WeblateLanguageBadgesProps) {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await fetch(
          `https://hosted.weblate.org/api/components/${project}/${component}/translations/`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch languages from Weblate');
        }

        const data = await response.json();

        // Filter out the source language (English) and extract language info
        const langs = data.results
          .filter((translation: any) => translation.language.code !== 'en')
          .map((translation: any) => ({
            code: translation.language.code,
            name: translation.language.name,
            url: translation.web_url,
          }))
          .sort((a: Language, b: Language) => a.name.localeCompare(b.name));

        setLanguages(langs);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchLanguages();
  }, [project, component]);

  if (loading) {
    return <div>Loading translation status...</div>;
  }

  if (error) {
    return <div>Error loading translations: {error}</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1rem' }}>
      {languages.map((lang) => (
        <a
          key={lang.code}
          href={lang.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://hosted.weblate.org/widget/${project}/${component}/${lang.code}/svg-badge.svg`}
            alt={`${lang.name} translation status`}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
