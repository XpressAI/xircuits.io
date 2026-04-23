import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Hero from '../components/homepage/Hero';
import StatsStrip from '../components/homepage/StatsStrip';
import BuildComponentShowcase from '../components/homepage/BuildComponentShowcase';
import AudienceTabs from '../components/homepage/AudienceTabs';
import FrameworksMarquee from '../components/homepage/FrameworksMarquee';
import FeatureCards from '../components/homepage/FeatureCards';
import CTASection from '../components/homepage/CTASection';
import AnimatedBackground from '../components/homepage/AnimatedBackground';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Visual programming for Python, ML, and AI agents. Drag, drop, ship."
    >
      <div className="tw-relative tw-isolate tw-overflow-hidden">
        <AnimatedBackground />
        <Hero />
        <StatsStrip />
        <BuildComponentShowcase />
        <AudienceTabs />
        <FrameworksMarquee />
        <FeatureCards />
        <CTASection />
      </div>
    </Layout>
  );
}
