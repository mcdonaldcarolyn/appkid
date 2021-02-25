import React from 'react';
import logo from '../assets/logo.png'
import styles from './NavBar.module.css';
import { SearchBar } from '../LandingPage/SearchBar/SearchBar';

export function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <img src={logo} className={styles.logo} alt='kidtivity logo' />
      <SearchBar small />
      <button className={`button ${styles}`}> Sign In</button>
      <button className={`button ${styles}`}> Register</button>
    </div>
  );
}