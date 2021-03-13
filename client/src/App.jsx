import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import ItineraryList from './components/ItineraryList';
import LeftNav from './components/LeftNav';

function App() {
  const { state, dispatch, register, login, logout } = useApplicationData();

  const { user, itineraries } = state;

  return (
    <Router>
      <Nav user={user} logout={logout} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login onSave={login} dispatch={dispatch} />
        </Route>
        <Route path='/signup'>
          <RegisterForm register={register} dispatch={dispatch} />
        </Route>
        <Route path='/itineraries'>
          <ItineraryList itineraries={itineraries} />
          <LeftNav user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
