import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './XircuitsforUsers.module.css';

function XircuitsforUsers() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <div className={clsx('row')}>

        <div className={clsx('col col--4 col--offset-1')}>
          <br></br>
          <div className={styles.contentPad}>
            <div className={styles.homepageHeader}>
              <h1>Xircuits for Users</h1>
            </div>

            <p>You don't have to know how to code to use Xircuits!</p>
            <ul>
                <li><strong>Create workflows</strong> from prebuilt components</li>
                <li><strong>Easily modify</strong> templates from our <strong>growing repository</strong> for your personal use case</li>
                <li>Our <strong>component tooltips </strong>will always be there to help you.</li>
            </ul>
            <p>From image classification to anomaly detection, perform complex workflows at a click of a button!</p>

            <div className={styles.buttons}>
              <Link
                className="button button--outline button--primary button--lg"
                to="/docs/category/tutorials">
                Go to User Guide
              </Link>
            </div>
          </div>
        </div>

        <div className={clsx('col col--5 col--offset-1 flex')}>
          <div className={styles.center}>
            <div className={styles.gifPad}>
              <video src="/img/website/xircuits-for-users-small.webm" autoPlay loop></video>
            </div>
          </div>
        </div>
    </div>
    );
}
export default XircuitsforUsers;