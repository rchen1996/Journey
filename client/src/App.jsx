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
import ItineraryDay from './components/ItineraryDay/ItineraryDay';
import AddActivityForm from './components/ItineraryDay/AddActivityForm';
import Bookmarks from './components/Bookmarks';
import MenuOpener from './components/MenuOpener';

function App() {
  const {
    state,
    dispatch,
    register,
    login,
    logout,
    createItinerary,
    removeCollaborator,
    createActivity,
    addCollaborator,
    setItinerary,
    addDayWithLocation,
    deleteItinerary,
    deleteBookmark,
    addBookmark,
    deleteDayFromItinerary,
    updateMenuState,
    deleteActivity,
  } = useApplicationData();

  const { user, itineraries, myItineraries, key, itinerary, bookmarks } = state;

  return (
    <Router>
      <Nav user={user} logout={logout} dispatch={dispatch} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/login'>
          <Login onSave={login} dispatch={dispatch} />
        </Route>
        <Route path='/signup'>
          <Register register={register} dispatch={dispatch} />
        </Route>
        <Route path={`/itineraries/new`}>
          {user.id && (
            <main className='flex w-full h-full min-h-screen'>
              <LeftNav user={user} setItinerary={setItinerary} />
              <NewItineraryForm
                dispatch={dispatch}
                onSave={createItinerary}
                user={user}
              />
            </main>
          )}
        </Route>
        <Route path='/itineraries' exact>
          <main className='flex w-full min-h-full'>
            <ItineraryList
              key={key}
              itineraries={itineraries}
              user={user}
              addBookmark={addBookmark}
              dispatch={dispatch}
              bookmarks={bookmarks}
            />
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id/collaborators'>
          <main className='flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              isMenuOpen={state.isMenuOpen}
            />
            <MenuOpener
              updateMenuState={updateMenuState}
              isMenuOpen={state.isMenuOpen}
            ></MenuOpener>
            {itinerary &&
              itinerary.users.some(member => member.id === user.id) && (
                <MyGroup
                  user={user}
                  itinerary={itinerary}
                  removeCollaborator={removeCollaborator}
                  addCollaborator={addCollaborator}
                  isMenuOpen={state.isMenuOpen}
                />
              )}
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id/days/:day_id/activities/new'>
          <main className='flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              isMenuOpen={state.isMenuOpen}
            />
            <MenuOpener
              updateMenuState={updateMenuState}
              isMenuOpen={state.isMenuOpen}
            ></MenuOpener>
            <AddActivityForm
              dispatch={dispatch}
              onSave={createActivity}
              itinerary={itinerary}
              isMenuOpen={state.isMenuOpen}
            />
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id/days/:day_id'>
          <main className='flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              isMenuOpen={state.isMenuOpen}
            />
            <MenuOpener
              updateMenuState={updateMenuState}
              isMenuOpen={state.isMenuOpen}
            ></MenuOpener>
            <ItineraryDay
              itinerary={itinerary}
              dispatch={dispatch}
              user={user}
              deleteDayFromItinerary={deleteDayFromItinerary}
              deleteActivity={deleteActivity}
              isMenuOpen={state.isMenuOpen}
            />
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id'>
          <main className='relative flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              isMenuOpen={state.isMenuOpen}
            />
            <MenuOpener
              updateMenuState={updateMenuState}
              isMenuOpen={state.isMenuOpen}
            ></MenuOpener>
            <Itinerary
              dispatch={dispatch}
              itinerary={itinerary}
              user={user}
              deleteDayFromItinerary={deleteDayFromItinerary}
              isMenuOpen={state.isMenuOpen}
            />
          </main>
        </Route>
        <Route path='/dashboard/:user_id/bookmarks'>
          {user.id && (
            <main className='flex w-full min-h-screen'>
              <LeftNav user={user} dispatch={dispatch} />
              <Bookmarks
                bookmarks={bookmarks}
                user={user}
                deleteBookmark={deleteBookmark}
                dispatch={dispatch}
              />
            </main>
          )}
        </Route>
        <Route path='/dashboard/:user_id'>
          {user.id && (
            <main className='flex w-full min-h-screen'>
              <LeftNav user={user} dispatch={dispatch} />
              <MyItinerariesList
                myItineraries={myItineraries}
                user={user}
                dispatch={dispatch}
                deleteItinerary={deleteItinerary}
              />
            </main>
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
