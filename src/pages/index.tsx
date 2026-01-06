import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import StructuredData from '@site/src/components/StructuredData';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo_stacked.svg" alt="Agregarr" className={styles.heroLogo} />
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            Get Started
          </Link>
        </div>
        <div className={styles.githubStats}>
          <a href="https://hub.docker.com/r/agregarr/agregarr" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/docker/pulls/agregarr/agregarr?style=social&logo=docker" alt="Docker Pulls" />
          </a>
          <a href="https://github.com/agregarr/agregarr" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/stars/agregarr/agregarr?style=social" alt="GitHub stars" />
          </a>
          <a href="https://discord.gg/RfEPPRQJQ2" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fdiscord.com%2Fapi%2Finvites%2FRfEPPRQJQ2%3Fwith_counts%3Dtrue&query=%24.approximate_member_count&logo=discord&logoColor=5865F2&label=Discord&style=social" alt="Discord Members" />
          </a>
          <a href="https://www.reddit.com/r/agregarr/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/reddit/subreddit-subscribers/agregarr?style=social&logo=reddit&label=Reddit" alt="Reddit Subscribers" />
          </a>
          <a href="https://hosted.weblate.org/projects/agregarr/agregarr-frontend/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/weblate/progress/agregarr?style=social&logo=weblate" alt="Translation status" />
          </a>
        </div>
      </div>
    </header>
  );
}

function ScreenshotSection() {
  return (
    <section className={styles.screenshotSection}>
      <div className="container">
        <img
          src="/img/agregarr-home.png"
          alt="Agregarr Home Screen"
          className={styles.screenshot}
        />
      </div>
    </section>
  );
}

function QuickStartSection() {
  return (
    <section className={styles.quickStart}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Quick Start
        </Heading>
        <p className={styles.sectionSubtitle}>
          Get Agregarr up and running in minutes with Docker Compose
        </p>
        <div className={styles.codeBlock}>
          <CodeBlock language="yaml">
{`services:
  agregarr:
    image: agregarr/agregarr:latest
    container_name: agregarr
    volumes:
      - /path/to/config:/app/config # change /path/to/config to your actual config path
    ports:
      - 7171:7171
    restart: unless-stopped`}
          </CodeBlock>
        </div>
        <div className={styles.quickStartLinks}>
          <Link to="/docs/installation">
            Full Installation Guide →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Agregarr - Official Documentation`}
      description="Agregarr is the easiest way to create and manage Plex Collections. Official documentation for installation, setup, and collection management.">
      <StructuredData />
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ScreenshotSection />
        <QuickStartSection />
      </main>
    </Layout>
  );
}
