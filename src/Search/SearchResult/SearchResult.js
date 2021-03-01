import React from 'react';
import styles from './SearchResult.module.css'
export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img src="https://via.placeholder.com/150C" alt="buisiness image" className={styles['business-image']}/>
      <div className={styles['business-info']}>
        <h2 className="subtitle">Fun kid thing</h2>
        <p>Rating</p>
        <p>$$<span className="tag">All ages</span> <span className="tag">Outdoor Farm activity</span></p>
      </div>
      <div>
        <p>phone number</p>
        <p>street address</p>
        <p>town, zip</p>
      </div>
      
    </div>
  )
}