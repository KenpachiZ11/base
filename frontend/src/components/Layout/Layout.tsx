import React from 'react';

import { Header } from '../Header/Header';

import styles from './Layout.module.scss';

type Props = {};

export const Layout = (props: Props) => {
  return <>
    <header className={styles.header}>
      <div>Logo</div>
      <Header
        title={'Шапка сайта'}
      />
    </header>
    <main className={styles.main}>
      <div>Nav</div>
      <div>Main</div>
    </main>
    <footer className={styles.footer}>
      <div>Footer</div>
    </footer>
  </>
}