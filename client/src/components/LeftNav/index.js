import DashboardLeftNav from './DashboardLeftNav';
import ItineraryLeftNav from './ItineraryLeftNav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function LeftNav(props) {
  return (
    <div>
      <Switch>
        <Route 
        name='newItinerary'
        path='/itineraries/new'
        >
          <DashboardLeftNav user={props.user} />
        </Route>
        <Route
          name='routeWithItineraryId'
          path='/itineraries/:itinerary_id(\d+)'
        >
          <ItineraryLeftNav
            itinerary={props.itinerary}
            user={props.user}
            addLocation={props.addLocation}
          />
        </Route>
        <Route 
        name='routeWithDashboard'
        path='/dashboard/:user_id(\d+)'
        >
          <DashboardLeftNav user={props.user} />
        </Route>
      </Switch>
      
    </div>
  );
}
