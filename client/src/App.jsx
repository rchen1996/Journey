import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import ItineraryList from './components/ItineraryList';
import LeftNav from './components/LeftNav';
import Itinerary from './components/ItineraryOverview/Itinerary';
import NewItineraryForm from './components/NewItineraryForm';
import MyItinerariesList from './components/MyItinerariesList';
import MyGroup from './components/MyGroup';

function App() {
  const {
    state,
    dispatch,
    register,
    login,
    logout,
    createItinerary,
    allowedUsers
  } = useApplicationData();

  const { user, itineraries, myItineraries, key, itinerary } = state;

  return (
    <Router>
      <Nav user={user} logout={logout} dispatch={dispatch} />
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
          {user.id && (
            <main className="flex w-full h-full">
              <LeftNav user={user} />
              <NewItineraryForm
                dispatch={dispatch}
                onSave={createItinerary}
                user={user}
              />
            </main>
          )}
        </Route>
        <Route path="/itineraries" exact>
          <ItineraryList key={key} itineraries={itineraries} />
        </Route>
        <Route path="/itineraries/:itinerary_id/collaborators">
          <main className="flex w-full h-full">
            {itinerary && <LeftNav user={user} itinerary={itinerary} />}
            <MyGroup />
          </main>
        </Route>
        <Route path="/itineraries/:itinerary_id">
          <main className="flex w-full h-full">
            {itinerary && <LeftNav user={user} itinerary={itinerary} />}
            <Itinerary dispatch={dispatch} itinerary={itinerary} travelParty={allowedUsers}/>
          </main>
        </Route>
        <Route path="/dashboard/:user_id">
          {user.id && (
            <main className="flex w-full h-full">
              <LeftNav user={user} />
              <MyItinerariesList myItineraries={myItineraries} user={user} />
            </main>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
