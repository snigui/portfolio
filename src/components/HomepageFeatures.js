import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: ' 🪐 ',
    Svg: require('../../static/img/lotus.svg').default,
    description: (
      <>
        『まくとぅそーけーなんくるないさ〜』
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <code>
        「if you do your best, it will work out for the best」
        </code>
      </div>
    </div>
  );　
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="rowMain">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
