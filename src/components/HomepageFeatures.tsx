/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Xpress Integration',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          Xpipes supports various famous ML and DL frameworks
          including Keras Tensorflow and Spark. All you need to do is 
          drag a line, and they're connected.
      </>
    ),
  },
  {
    title: 'Xpress Training',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Xpipes in Konsole allows you access to industry level DL training hardware,
        such as the Aurora Vector Engine.  
      </>
    ),
  },
  {
    title: 'Xpress Workflow',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Convey your  workflow to colleagues and superiors alike
        with Xpipes Components. Visual and low-code, focus on expressing
        your ideas.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
