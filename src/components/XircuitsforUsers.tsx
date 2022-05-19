import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './XircuitsforUsers.module.css';

function XircuitsforUsers() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <div className={clsx('row')}>

        <div className={clsx('col col--3 col--offset-2')}>
          <br></br>
          <h1>Xircuits for Users</h1>
          <p>You don't have to know how to code to use Xircuits!</p>
          <ul>
              <li><strong>Create workflows</strong> from prebuilt components</li>
              <li><strong>Easily modify</strong> templates from our <strong>growing repository</strong> for your personal use case</li>
              <li>Sharing your work is as <strong>easy</strong> as drag and drop</li>
          </ul>
          <p>From image classification to anomaly detection, perform complex workflows at a click of a button!</p>

          <div className={styles.buttons}>
            <Link
              className="button button--outline button--primary button--lg"
              to="/docs/category/user-guide">
              Go to User Guide
            </Link>
          </div>

        </div>

        <div className={clsx('col col--5 col--offset-1')}>
          <img src="/img/website/anomaly-detection.gif"></img>
        </div>
    </div>
    );
}
export default XircuitsforUsers;