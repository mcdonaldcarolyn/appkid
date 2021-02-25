import React from 'react';
import { SubNavItem } from './SubNavItem/SubNavItem';


export function SubNav() {
  return (
    <div>
      <SubNavItem label ='Park' icon = 'fa-tree'/>
      <SubNavItem label='kid friendly dining' icon='fa-utensil'/>
      <SubNavItem label='Playgrounds' icon='fa-landmark'/>
      <SubNavItem label='more' icon='fa-info'/>
    </div>
  )
}