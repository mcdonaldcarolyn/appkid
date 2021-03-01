import React from 'react';
import styles from './BusinessRating.module.css'

export function BusinessRating(){
  return (
    <div className={styles.rating}>
      <Rating 
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fraction={2}
        readonly
        initialRating={3}
        />
    </div>
    );
}