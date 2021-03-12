import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

function App() {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map(user => (
    <li key={user.id}>
      {' '}
      {user.first_name} {user.last_name} {user.email}{' '}
    </li>
  ));
  return (
    <div className="">
      <h1 className="text-xl text-teal-600"> Users </h1>

      <ul> {userList} </ul>
    </div>
  );
}

export default App;
