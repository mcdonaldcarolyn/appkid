import React from 'react';
import { BusinessRating } from '../../BusinessRating/BusinessRating';
import styles from './SearchResult.module.css'

export function SearchResult(props) {
  const b = props.businesses;
  //console.log(b)
  console.log(b.categories)
  if (!b) {
    return (<div/>);
  }
  const tags = b.categories.map(category => (<span className={'tag'} key={b.id + category.title}>{category.title}</span>));

  return (
    <div className={styles['search-result']}>
      <img src={b.photos} alt="business image" className={styles['business-image']}/>
      <div className={styles['business-info']}>
        <h2 className="subtitle">{ b.name}</h2>
        <BusinessRating reviewCount={b.review_count} rating={b.rating}/>
        <p>{b.price} {tags} </p>
      </div>
      <div className={styles['contact-info']}>
        <p>{ b.phone}</p>
        <p>{ b.location.address1}</p>
        <p>{ b.location.city}</p>
      </div>
      
    </div>
  )
}