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
    image: '/img/website/frameworks/pycaret.png',
  },
  {
    title: 'Streamlit',
    image: '/img/website/frameworks/streamlit.svg',
  },
  {
    title: 'RabbitMQ',
    image: '/img/website/frameworks/rabbitmq.svg',
  },
  {
    title: 'MQTT',
    image: '/img/website/frameworks/mqtt.png',
  },
];

function Framework({title, image}: FrameworkItem) {
  return (
    <div className={clsx('col', styles.col)}>
      <div className={styles.featureImgContainer}>
        <img className={styles.featureImg} alt={title} src={image} />
      </div>
    </div>
  );
}

function FrameworkDisplay(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.row)}>
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
      <br />
      <section className={styles.homepageHeader}>
        <h1>Supported Frameworks</h1>
      </section>
      <FrameworkDisplay />
    </section>
  );
}
