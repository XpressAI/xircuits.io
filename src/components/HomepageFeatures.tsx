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
    title: 'Easy to Configure',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Spark Cyclone is designed as a standard plug-in for Apache Spark.
          Simply adding a couple of lines to your spark-submit command is
          all you need to accelerate your jobs between 2x and 10x.
      </>
    ),
  },
  {
    title: 'Compatible',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        The SX-Aurora TSUBASA Vector Engine is natively 64-bit, so you
          don&apos;t have to change your longs to ints, or doubles to
          float to take advantage of the extra performance.
      </>
    ),
  },
  {
    title: 'Powered by Frovedis',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        <a href='http://github.com/frovedis/frovedis'>Frovedis</a> provides the foundation
        for Spark Cyclone giving us algorithms that are highly optimized for not only
        the SX-Aurora TSUBASA Vector Engine but also X86_64 CPUs.
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
