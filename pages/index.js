import Head from 'next/head';
import getConfig from 'next/config';

import styles from '../styles/Home.module.css';

const {
  serverRuntimeConfig: { BASE_URL_ONLY } = {},
  publicRuntimeConfig: { BASE_URL_BOTH } = {},
} = getConfig();

console.log('serverRuntimeConfig>>>>  ', BASE_URL_ONLY);
console.log('publicRuntimeConfig>>>>  ', BASE_URL_BOTH);

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{`BASE_URL_ONLY: ${BASE_URL_ONLY || ''}`}</h2>
        <h2>{`BASE_URL_BOTH: ${BASE_URL_BOTH || ''}`}</h2>
      </main>
    </div>
  );
}
