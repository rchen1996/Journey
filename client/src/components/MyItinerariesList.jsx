import MyItinerariesListItem from './MyItinerariesListItem';

export default function MyItinerariesList(props) {
  const parsedItineraries = props.myItineraries.map((itinerary) => (
    <MyItinerariesListItem
      key={itinerary.id}
      itinerary={itinerary}
      user={props.user}
    />
  ));
  return (
    <section className='grid gap-4 m-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-rows'>
      {/* <h1 className=''>My Itineraries</h1> */}
      {parsedItineraries}
    </section>
  );
}
