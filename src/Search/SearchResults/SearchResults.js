import React from 'react';
import { SearchResult } from '../SearchResult/SearchResult';
import styles from "./SearchResults.module.css";


export function SearchResults(props) {
  console.log("blue");
  console.log(props.businesses);
  if(!props.businesses || !props.businesses.length){
    return (<div>error</div>);
  }

  const searchResults = props.businesses.map(b => <SearchResult key={b.id} businesses={b}/>)
  
  return (
    <div className={styles['search-results']}>
        {searchResults}
    </div>
  );
}