import DashboardLeftNav from './DashboardLeftNav';
import ItineraryLeftNav from './ItineraryLeftNav';
import { useParams } from 'react-router-dom';

export default function LeftNav(props) {
  return (
    <div>
      {useParams().itinerary_id ? (
        <ItineraryLeftNav
          itinerary={props.itinerary}
          user={props.user}
          dispatch={props.dispatch}
        />
      ) : (
        <DashboardLeftNav user={props.user} />
      )}
    </div>
  );
}
