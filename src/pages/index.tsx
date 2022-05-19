import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageHeader from '../components/HomepageHeader';
import HomepageFeatures from '../components/HomepageFeatures';
import SupportedFrameworks from '../components/SupportedFrameworks';
import XircuitsforUsers from '../components/XircuitsforUsers';
import XircuitsforDevelopers from '../components/XircuitsforDevelopers';



export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Xpress Your Workflows">
      <HomepageHeader />
      <main>
        <XircuitsforUsers /><hr />
        <XircuitsforDevelopers /><hr />
        <SupportedFrameworks />
      </main>
    </Layout>
  );
}