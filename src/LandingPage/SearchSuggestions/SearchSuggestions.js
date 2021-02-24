import React from 'react';
import styles from './SearchSuggestions.module.css';

export function SearchSuggestions (){
  return(
    <div className={styles.suggestions}>
      <span className='icon is-small'>
            <i className="fas fa-trees"></i>
      </span>
      <span className={styles.suggestion}>
        Parks
      </span>
      <span className='icon is-small'>
            <i className="fas fa-baby-carriage"></i>
      </span>
      <span className={styles.suggestion}>
        Stroller friendly
      </span>
      <span className='icon is-small'>
            <i className="fas fa-landmark"></i>
      </span>
      <span className={styles.suggestion}>
        Playgrounds
      </span>
      <span className='icon is-small'>
            <i className="fas fa-utensils"></i>
      </span>
      <span className={styles.suggestion}>
      kid friendly restaurants
      </span>
    </div>
  )
}