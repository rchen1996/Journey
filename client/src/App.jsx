import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useApplicationData from './hooks/useApplicationData';

import Home from './components/Home';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import ItineraryList from './components/ItineraryList';
import LeftNav from './components/LeftNav/index';
import PrintableItinerary from './components/ItineraryOverview/PrintableItinerary';
import Itinerary from './components/ItineraryOverview/Itinerary';
import NewItineraryForm from './components/NewItineraryForm';
import MyItinerariesList from './components/MyItinerariesList';
import MyGroup from './components/MyGroup';
import ItineraryDay from './components/ItineraryDay/ItineraryDay';
import AddActivityForm from './components/ItineraryDay/AddActivityForm';
import Bookmarks from './components/Bookmarks';
import ManageAccount from './components/ManageAccount';
import EditItineraryForm from './components/EditItineraryForm';
import RightNav from './components/RightNav/RightNav';

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
    updateSidebar,
    deleteActivity,
    editActivity,
    changePassword,
    editItinerary,
    searchAttractions,
    addMyLocation,
    updateActivityDay,
    deleteActivityWithoutDay,
    searchItineraries,
    addTripNote,
    deleteTripNote,
    editTripNote,
  } = useApplicationData();

  const { user, myItineraries, itinerary, bookmarks, key } = state;

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
              user={user}
              addBookmark={addBookmark}
              dispatch={dispatch}
              bookmarks={bookmarks}
              searchItineraries={searchItineraries}
              reload={key}
              deleteBookmark={deleteBookmark}
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
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
            />
            {itinerary &&
              itinerary.users &&
              itinerary.users.some(member => member.id === user.id) && (
                <MyGroup
                  user={user}
                  itinerary={itinerary}
                  removeCollaborator={removeCollaborator}
                  addCollaborator={addCollaborator}
                  sideBarState={state.sideNav}
                  updateSidebar={updateSidebar}
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
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
            />
            <AddActivityForm
              dispatch={dispatch}
              onSave={createActivity}
              itinerary={itinerary}
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
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
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
            />
            <ItineraryDay
              itinerary={itinerary}
              dispatch={dispatch}
              user={user}
              deleteDayFromItinerary={deleteDayFromItinerary}
              deleteActivity={deleteActivity}
              editActivity={editActivity}
              sideBarState={state.sideNav}
            />
            {itinerary &&
              itinerary.users &&
              itinerary.users.some(member => member.id === user.id) && (
                <RightNav
                  itinerary={itinerary}
                  sideBarState={state.sideNav}
                  updateSidebar={updateSidebar}
                  dispatch={dispatch}
                  searchAttractions={searchAttractions}
                  addMyLocation={addMyLocation}
                  createActivity={createActivity}
                  updateActivityDay={updateActivityDay}
                  deleteActivity={deleteActivityWithoutDay}
                />
              )}
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id/overview/edit'>
          <main className='relative flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
            />
            {itinerary && (
              <EditItineraryForm
                dispatch={dispatch}
                itinerary={itinerary}
                onSave={editItinerary}
              />
            )}
          </main>
        </Route>
        <Route path='/itineraries/:itinerary_id'>
          <main className='relative flex w-full min-h-screen'>
            <LeftNav
              user={user}
              itinerary={itinerary}
              setItinerary={setItinerary}
              addDayWithLocation={addDayWithLocation}
              sideBarState={state.sideNav}
              updateSidebar={updateSidebar}
            />
            {itinerary && (
              <PrintableItinerary>
                <Itinerary
                  dispatch={dispatch}
                  itinerary={itinerary}
                  user={user}
                  deleteDayFromItinerary={deleteDayFromItinerary}
                  sideBarState={state.sideNav}
                  addBookmark={addBookmark}
                  deleteBookmark={deleteBookmark}
                  bookmarks={bookmarks}
                  addTripNote={addTripNote}
                  deleteTripNote={deleteTripNote}
                  editTripNote={editTripNote}
                />
              </PrintableItinerary>
            )}
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
        <Route path='/dashboard/:user_id/edit'>
          {user.id && (
            <main className='flex w-full min-h-screen'>
              <LeftNav user={user} dispatch={dispatch} />
              <ManageAccount
                user={user}
                changePassword={changePassword}
              ></ManageAccount>
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
