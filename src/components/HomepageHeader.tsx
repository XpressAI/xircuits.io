import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <header className={(styles.heroBanner)}>
        <div className="container">
          <img src="/img/xircuits-logo.png"></img>
          <img src="/img/docs/xircuits-frontpage.gif"></img>

          <p className="hero__subtitle">A simple visual programming environment for Jupyterlab.</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/main/">
              Get Started
            </Link>
          </div>
        </div>
      </header>
    );
}
export default HomepageHeader;