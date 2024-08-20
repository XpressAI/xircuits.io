import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './XircuitsforDevelopers.module.css';

function XircuitsforDevelopers() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <div className={clsx('row')}>

        <div className={clsx('col col--5 col--offset-1')}>
          <div className={styles.center}>
            <div className={styles.gifPad}>
              <video src="/img/website/xircuits-for-developers-small.webm" autoPlay loop></video>
            </div>
          </div>
        </div>
        <div className={clsx('col col--4 col--offset-1')}>
          <div className={styles.contentPad}>

            <br></br>
            <div className={styles.homepageHeader}>
              <h1>Xircuits for Developers</h1>
            </div>
            
            <p>If you're a Python developer, you'll be greeted with familiar Jupyterlab tools.</p>
            <ul>
                <li>Create templates supported by our <strong>rich canvas interface</strong>.</li>
                <li><strong>Generate portable code</strong> from your workflows.</li>
                <li><strong>Collaborating</strong> with your colleague is as <strong>easy</strong> as drag and drop</li>
            </ul>
            <p>What you can do in Python, you can do in Xircuits. The sky's the limit!</p>
            <div className={styles.buttons}>
              <Link
                className="button button--outline button--success button--lg"
                to="/docs/category/developer-guide">
                Go to Dev Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
export default XircuitsforDevelopers;