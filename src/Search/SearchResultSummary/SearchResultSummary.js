import React from 'react';
import styles from './SearchResultSummary.module.css';

export function SearchResultSummary() {
  return (
    <div className={styles.container}>
      <div className={styles['search-summary']}>
        <h1 className='subtitle'><strong>Beach days</strong>near me</h1>
        <p>Showing number out of number results</p>
      </div>
    </div>
  )
}