import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './XircuitsforEnterprise.module.css';

function XircuitsforEnterprise() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <div className={clsx('row')}>

        <div className={clsx('col col--4 col--offset-1')}>
          <br></br>
          <div className={styles.contentPad}>
            <div className={styles.homepageHeader}>
              <h1>Xircuits for Enterprise</h1>
            </div>

            <p>Ready to deploy? Transform your workflows into real-world applications with XpressAI Platform.</p>
            <ul>
                <li><strong>Deploy Xircuits as a service</strong> and access AI Agent templates to streamline and customize your workflows</li>
                <li><strong>Share projects seamlessly</strong> across your organization and collaborators with enhanced collaboration tools</li>
                <li><strong>Say hello to the AI assistant</strong> that can help you create workflows and explore available tools.</li>
            </ul>
            <p>Get started. It's free for your first project.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--outline button--primary button--lg"
                to="https://docs.xpress.ai/">
                Go to Platform
              </Link>
            </div>
          </div>
        </div>

        <div className={clsx('col col--5 col--offset-1 flex')}>
          <div className={styles.center}>
            <div className={styles.gifPad}>
              <img src="/img/website/preview-xircuits-enterprise.gif" alt="XpressAI Platform preview"></img>
            </div>
          </div>
        </div>
    </div>
    );
}

export default XircuitsforEnterprise;
