import React from 'react';
import logo from '../assets/logo.png'
import styles from './NavBar.module.css';
import { SearchBar } from '../LandingPage/SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <Link to='/'> <img src={logo} className={styles.logo} alt='kidtivity logo' /></Link>
      <SearchBar small />
      <button className={`button ${styles}`}> Sign In</button>
      <button className={`button ${styles}`}> Register</button>
    </div>
  );
}