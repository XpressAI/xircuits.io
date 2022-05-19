import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomepageHeader.module.css';

function UserSection() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <div className={clsx('row')}>

        <div className={clsx('col col--5')}>
          <div className="card-demo">
          <div className="card">
            <div className="card__body">
              <h2>Xircuits for Users</h2>
              <small>
                Perform complex and sophisticated workflows with no code experience needed.
              </small>
            </div>
            <div className="card__footer">
              <button className="button button--primary button--block">Visit</button>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx('col col--5')}>
          <div className="card-demo">
          <div className="card">
            <div className="card__body">
              <h2>Xircuits for Developers</h2>
              <small>
                Create 
                What you can do in Python you can do in Xircuits.
              </small>
            </div>
            <div className="card__footer">
              <button className="button button--primary button--block">Visit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    );
}
export default UserSection;