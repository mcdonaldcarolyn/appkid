import React from 'react';
import { BusinessRating } from '../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css'

export function SearchResult(props) {
  const b = props.businesses;
  if (!b) {
    return (<div/>);
  }
  return (
    <div className={styles['search-result']}>
      <img src={b.image_url} alt="business image" className={styles['business-image']}/>
      <div className={styles['business-info']}>
        <h2 className="subtitle">{ b.name}</h2>
        <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
        <p>$$<span className="tag">All ages</span> <span className="tag">Outdoor Farm activity</span></p>
      </div>
      <div className={styles['contact-info']}>
        <p>phone number</p>
        <p>street address</p>
        <p>town, zip</p>
      </div>
      
    </div>
  )
}