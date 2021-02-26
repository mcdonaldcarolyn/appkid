import React from 'react';
import styles from './SearchResultSummary.module.css';

export function SearchResultSummary() {
  return (
    <div className={styles.container}>
      <div className={styles['search-summary']}>
        <h1 className='subtitle'><strong>Beach days </strong>near me</h1>
        <p>Showing number out of number results</p>
      </div>
      <div className={styles.filters}>
      <button className="button">
        <span className="icon">
          <i className="fas fa-sliders-h"></i>
        </span>
        <span>Filters</span>
        </button>
        <div className="buttons has-addons">
          <button className="button">$</button>
          <button className="button">$$</button>
          <button className="button">$$$</button>
        </div>
      <button className="button">
        <span className="icon">
          <i className="fas fa-clock"></i>
        </span>
        <span>Open Now</span>
      </button>
      <button className="button">
        <span className="icon">
          <i className="fas fa-bathroom"></i>
        </span>
        <span>diaper changing area</span>
      </button>

      </div>
    </div>
  )
}