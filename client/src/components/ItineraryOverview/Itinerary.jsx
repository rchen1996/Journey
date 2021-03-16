import ItineraryDays from './ItineraryDays';

export default function Itinerary(props) {
  const { itinerary, user, deleteDayFromItinerary } = props;

  const formatDate = dateString => {
    if (dateString) {
      return new Date(dateString).toDateString();
    }
  };

  return (
    <div className='flex flex-col w-full lg:ml-64 pt-16'>
      <h1>{itinerary && itinerary.name}</h1>
      <h4>Trip Dates</h4>
      <p>
        {itinerary &&
          `${formatDate(itinerary.start_date)} - ${formatDate(
            itinerary.end_date
          )}`}
      </p>
      <h4>Itinerary Description</h4>
      <p>{itinerary && itinerary.description}</p>
      <h2>Itinerary Overview</h2>
      <section className='flex flex-col w-full h-full mx-8 my-8 mt-24 lg:mx-24'>
        {itinerary &&
          itinerary.locations &&
          itinerary.locations.map((location, index) => {
            return (
              <div key={index}>
                <h2 className='mb-4 ml-2 text-3xl font-bold'>
                  {location.name}
                </h2>
                {location.days &&
                  location.days.map(day => {
                    return (
                      <ItineraryDays
                        key={day.id}
                        day={day}
                        itinerary={itinerary}
                        user={user}
                        deleteDayFromItinerary={deleteDayFromItinerary}
                        days={location.days}
                      />
                    );
                  })}
              </div>
            );
          })}
      </section>
    </div>
  );
}
