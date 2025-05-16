import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Password Management',
    description: (
      <>
        Generate, save, find, update, and delete passwords securely. 
        XPManager gives you complete control over your passwords with
        both ASCII and HEX formats support.
      </>
    ),
  },
  {
    title: 'File Encryption',
    description: (
      <>
        Protect your sensitive files and directories using powerful Fernet
        encryption. XPManager ensures your data stays private and secure.
      </>
    ),
  },
  {
    title: 'Backup & Logging',
    description: (
      <>
        Create and restore backups of your password database. Track all 
        operations with the comprehensive logging system for better 
        security monitoring.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
