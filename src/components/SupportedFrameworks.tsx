/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './SupportedFrameworks.module.css';

type FrameworkItem = {
  title: string;
  image: string;
};

const FrameworkList: FrameworkItem[] = [
  {
    title: 'Tensorflow',
    image: '/img/website/frameworks/tensorflow.svg',
  },
  {
    title: 'Pytorch',
    image: '/img/website/frameworks/pytorch.svg',
  },
  {
    title: 'Spark',
    image: '/img/website/frameworks/spark.svg',
  },
  {
    title: 'Pycaret',
    image: '/img/website/frameworks/pycaret2.png',
  },
];

function Framework({title, image}: FrameworkItem) {
  return (
    <div className={clsx('col')}>
      <div className="container">
          <img className={styles.featureImg} alt={title} src={image} />
      </div>
    </div>
  );
}

function FrameworkDisplay(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FrameworkList.map((props, idx) => (
            <Framework key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SupportedFramework(): JSX.Element {
  return (
    <section>
        <br></br>
        <h1>Supported Frameworks</h1>
        <FrameworkDisplay /><br></br>
    </section>
  );
}