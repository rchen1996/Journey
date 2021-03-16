import ItineraryDays from './ItineraryDays';

export default function Itinerary(props) {
  const { itinerary, user, deleteDayFromItinerary } = props;

  return (
    <div className='flex w-full md:ml-64'>
      <section className='flex flex-col w-full h-full mx-24 my-8 mt-24'>
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
