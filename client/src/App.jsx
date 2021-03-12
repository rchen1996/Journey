import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';
import Home from './components/Home';
function App() {
  const { state, dispatch } = useApplicationData();
  const userList = state.users.map(user => (
    <li key={user.id}>
      {' '}
      {user.first_name} {user.last_name} {user.email}{' '}
    </li>
  ));
  return (
    <Router>
      <div className="">
        <h1 className="text-xl text-teal-600"> Users </h1>

        <ul> {userList} </ul>
      </div>
      <nav></nav>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
