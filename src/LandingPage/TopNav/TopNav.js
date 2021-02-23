import React from 'react';
import styles from './TopNav.module.css';
export function TopNav() {
  return (
    <div className ={styles['top-nav']}>
      <div className={styles.left}>
        <span>write a review</span>
        <span> events</span>
      </div>
      <div className={styles.right}>
        <span>Log in</span>
        <button className='button'>Sign up</button>
      </div>
    </div>
  );
}