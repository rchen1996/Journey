import ItineraryListItem from './ItineraryListItem';

export default function ItineraryList(props) {
  const parsedItineraries = props.itineraries.map(itinerary => (
    <ItineraryListItem key={itinerary.id} itinerary={itinerary} />
  ));

  return <div>{parsedItineraries}</div>;
}
