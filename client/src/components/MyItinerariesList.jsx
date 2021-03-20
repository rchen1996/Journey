import MyItinerariesListItem from './MyItinerariesListItem';

export default function MyItinerariesList(props) {
  const parsedItineraries = props.myItineraries.map(itinerary => (
    <MyItinerariesListItem
      key={itinerary.id}
      itinerary={itinerary}
      user={props.user}
      dispatch={props.dispatch}
      deleteItinerary={props.deleteItinerary}
    />
  ));
  return (
    <div className='flex flex-col w-full pt-16'>
      <div className='pl-3 mt-8 border-l-8 border-teal-600 ml-9'>
        <h1 className='text-3xl font-bold'>My Itineraries</h1>
        <h2 className='text-lg text-gray-500'>
          Itineraries you have created or joined.
        </h2>
      </div>
      <section className='grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-rows'>
        {parsedItineraries}
      </section>
    </div>
  );
}
