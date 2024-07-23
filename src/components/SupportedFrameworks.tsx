import React from 'react';
import clsx from 'clsx';
import styles from './SupportedFrameworks.module.css';

type FrameworkItem = {
  title: string;
  image: string;
  link: string;
};

const dataScienceFrameworks: FrameworkItem[] = [
  {
    title: 'Tensorflow',
    image: '/img/website/frameworks/tensorflow.svg',
    link: 'https://github.com/XpressAI/xai-tensorflow-keras',
  },
  {
    title: 'Pytorch',
    image: '/img/website/frameworks/pytorch.svg',
    link: 'https://github.com/XpressAI/xai-pytorch',
  },
  {
    title: 'SKLearn',
    image: '/img/website/frameworks/scikit-learn.svg',
    link: 'https://github.com/XpressAI/xai-sklearn',
  },
  {
    title: 'XGBoost',
    image: '/img/website/frameworks/xgboost.png',
    link: 'https://github.com/XpressAI/xai-xgboost',
  },
  {
    title: 'Spark',
    image: '/img/website/frameworks/spark.svg',
    link: 'https://github.com/XpressAI/xai-spark',
  },
  {
    title: 'Pycaret',
    image: '/img/website/frameworks/pycaret.png',
    link: 'https://github.com/XpressAI/xai-pycaret',
  }
];

const frontendFrameworks: FrameworkItem[] = [
  {
    title: 'Streamlit',
    image: '/img/website/frameworks/streamlit.svg',
    link: 'https://github.com/XpressAI/xai-streamlit',
  },
  {
    title: 'Gradio',
    image: '/img/website/frameworks/gradio.svg',
    link: 'https://github.com/XpressAI/xai-gradio',
  }
];

const aiAgentsFrameworks: FrameworkItem[] = [
  {
    title: 'Vecto',
    image: '/img/website/frameworks/vecto.svg',
    link: 'https://github.com/XpressAI/xai-vecto',
  },
  {
    title: 'OpenAI',
    image: '/img/website/frameworks/openai.svg',
    link: 'https://github.com/XpressAI/xai-openai',
  },
  {
    title: 'Anthropic',
    image: '/img/website/frameworks/anthropic.svg',
    link: 'https://github.com/XpressAI/xai-anthropic',
  },
  {
    title: 'HF Agent',
    image: '/img/website/frameworks/hugging-face.svg',
    link: 'https://github.com/XpressAI/xai-hfagent',
  },
  {
    title: 'Stability AI',
    image: '/img/website/frameworks/stability-ai.svg',
    link: 'https://github.com/XpressAI/xai-stability-ai',
  },
  {
    title: 'Gemini',
    image: '/img/website/frameworks/gemini.svg',
    link: 'https://github.com/XpressAI/xai-google-gemini',
  },
];

const communicationFrameworks: FrameworkItem[] = [
  {
    title: 'Slack',
    image: '/img/website/frameworks/slack.svg',
    link: 'https://github.com/XpressAI/xai-slack',
  },
  {
    title: 'Discord',
    image: '/img/website/frameworks/discord.svg',
    link: 'https://github.com/XpressAI/xai-discord',
  },
];

const messageQueuesFrameworks: FrameworkItem[] = [
  {
    title: 'RabbitMQ',
    image: '/img/website/frameworks/rabbitmq.svg',
    link: 'https://github.com/XpressAI/xai-rabbitmq',
  },
  {
    title: 'MQTT',
    image: '/img/website/frameworks/mqtt.png',
    link: 'https://github.com/XpressAI/xai-mqtt',
  },
];

const databasesFrameworks: FrameworkItem[] = [
  {
    title: 'SQLite',
    image: '/img/website/frameworks/sqlite.svg',
    link: 'https://github.com/XpressAI/xai-sqlite',
  },
  {
    title: 'MongoDB',
    image: '/img/website/frameworks/mongodb.svg',
    link: 'https://github.com/XpressAI/xai-mongoDB',
  },
  {
    title: 'Flask',
    image: '/img/website/frameworks/flask.svg',
    link: 'https://github.com/XpressAI/xai-flask',
  },
];

const cloudServicesFrameworks: FrameworkItem[] = [
  {
    title: 'Microsoft',
    image: '/img/website/frameworks/microsoft.svg',
    link: 'https://github.com/XpressAI/xai-ms-graph',
  },
  {
    title: 'Google',
    image: '/img/website/frameworks/google-cloud.svg',
    link: 'https://github.com/XpressAI/xircuits',
  },
  {
    title: 'AWS',
    image: '/img/website/frameworks/aws.svg',
    link: 'https://github.com/XpressAI/xai-boto3',
  },
];

function Framework({ title, image, link }: FrameworkItem) {
  return (
    <div className={clsx('col', styles.col)}>
      <div className={styles.featureImgContainer}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className={styles.featureImg} alt={title} src={image} />
        </a>
      </div>
    </div>
  );
}

function Section({ title, frameworks }: { title: string, frameworks: FrameworkItem[] }) {
  return (
    <div>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        <hr />
      </div>
      <div className={clsx('row', styles.row)}>
        {frameworks.map((props, idx) => (
          <Framework key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}

function FrameworkDisplay(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Section title="Data Science, Machine Learning, and Data Processing" frameworks={dataScienceFrameworks} />
        <Section title="AI Agents" frameworks={aiAgentsFrameworks} />
        <Section title="Frontend Frameworks" frameworks={frontendFrameworks} />
        <Section title="Backends & Databases" frameworks={databasesFrameworks} />
        <Section title="Communication" frameworks={communicationFrameworks} />
        <Section title="Message Queues" frameworks={messageQueuesFrameworks} />
        <Section title="Cloud Services" frameworks={cloudServicesFrameworks} />
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
