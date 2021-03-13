import MyItinerariesListItem from './MyItinerariesListItem';

export default function MyItinerariesList(props) {
  const parsedItineraries = props.myItineraries.map(itinerary => (
    <MyItinerariesListItem itinerary={itinerary} />
  ));
  return (
    <h1>My Itineraries</h1>
    {parsedItineraries}
  );
}
