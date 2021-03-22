import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavButton(props) {
  return (
    <NavLink
      exact
      to={props.link}
      onClick={props.onClick}
      className='flex items-center h-full p-2 pt-3 border-b-4 border-transparent hover:border-teal-600'
      activeClassName='border-teal-600'
    >
      {props.children}
    </NavLink>
  );
}
