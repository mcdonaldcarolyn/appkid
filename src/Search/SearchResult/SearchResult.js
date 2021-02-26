import React from 'react';
import styles from './SearchResult.module.css'
export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img src="https://via.placeholder.com/150C"  alt="buisiness image"/>
      <p>General Info</p>
      <p>Address</p>
    </div>
  )
}