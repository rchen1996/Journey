import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import ItineraryList from './components/ItineraryList';
import LeftNav from './components/LeftNav';
import NewItineraryForm from './components/NewItineraryForm';

function App() {
  const {
    state,
    dispatch,
    register,
    login,
    logout,
    createItinerary,
  } = useApplicationData();

  const { user, itineraries} = state;

  return (
    <Router>
      <Nav user={user} logout={logout} />      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login onSave={login} dispatch={dispatch} />
        </Route>
        <Route path="/signup">
          <Register register={register} dispatch={dispatch} />
        </Route>
        <Route path={`/itineraries/new`}>
          <NewItineraryForm dispatch={dispatch} onSave={createItinerary} />
        </Route>
        <Route path="/itineraries">
          <ItineraryList itineraries={itineraries} />
        </Route>
        <Route path="/dashboard">
          <LeftNav user={user} itinerary={state.itinerary}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
