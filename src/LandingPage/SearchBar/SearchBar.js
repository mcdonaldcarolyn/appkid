import React, {useState} from 'react';
import styles from './SearchBar.module.css';

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || '');
  const [location, setLocation] = useState(props.location || '');

  function submit(e) {
    if (typeof props.search === 'function') {
      props.search(term, location);
    }
    console.log(term, location);
    e.preventDefault();
  }
  
  const sizeClass = props.small ? '' : 'is-medium';
  return (
    <form onSubmit={submit}>
      <div className="field has-addons">
        <p className="control">
          <button className={`button is-status ${sizeClass}`}> Search</button>
        </p>
        <p className="control">
          <input className={`input ${sizeClass} ${styles['input-control']}`}
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
            placeholder="Kid activities..." />
        </p>
        <p className="control">
          <div className={`button is-static ${sizeClass}`}>NEAR</div>
        </p>
        <div className="control">
          <input className={`input ${sizeClass} ${styles['input-control']}`}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            type="text"
            placeholder="me" />
        </div>
        <div className={`button ${sizeClass} ${styles['search-button']}`} onClick={submit}>
          <span className={`icon is-small ${styles['icon']}`}>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </form>
  )
}