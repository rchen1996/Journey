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
    <div className='flex flex-col'>
      <h1 className='pl-4 mt-8 ml-10 text-2xl font-bold border-l-8 border-teal-600'>
        My Itineraries
      </h1>
      <section className='grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-rows'>
        {parsedItineraries}
      </section>
    </div>
  );
}
