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
          setItinerary={props.setItinerary}
          addDayWithLocation={props.addDayWithLocation}
          location={props.location}
          isLeftNavOpen={props.isLeftNavOpen}
        />
      ) : (
        <DashboardLeftNav user={props.user} />
      )}
    </div>
  );
}
