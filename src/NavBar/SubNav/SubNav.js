import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';
import styles from './SubNav.module.css'

export function SubNav() {
  return (
    <div className={styles.container}>
    <div className={styles['sub-nav']}>
      <div>
        <SubNavItem label ='Park' icon = 'fa-tree'/>
        <SubNavItem label='kid friendly dining' icon='fa-utensils'/>
        <SubNavItem label='Playgrounds' icon='fa-landmark'/>
        <SubNavItem label='info' icon='fa-info-circle' showRightBorder />
      </div>
      
      <div>
        <button className={`button ${'subnav-button'}`}>
          <span className="icon">
              <i className="fas fa-pen"/>
          </span>
          <span>write a review</span>
        </button>
        <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
        <span className="icon">
          <i className="fas fa-hotel"/>
        </span>
        <span>For Business</span>
          </button>
      </div>
    </div>
    </div>
  )
}