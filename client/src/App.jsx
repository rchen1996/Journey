import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';
import Home from './components/Home';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';

function App() {
  const { state, dispatch, register, login } = useApplicationData();
  const userList = state.users.map(user => (
    <li key={user.id}>
      {' '}
      {user.first_name} {user.last_name} {user.email}{' '}
    </li>
  ));

  return (
    <Router>
      <div className="">
        <h1 className="text-xl text-teal-600 font-body"> Users </h1>
        <ul className="font-body"> {userList} </ul>
      </div>
      <nav></nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login onSave={login} />
        </Route>
        <Route path="/signup">
          <RegisterForm register={register} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
