import { useLocation, Link } from 'react-router-dom';

import ItineraryDays from './ItineraryDays';

export default function Itinerary(props) {
  const { itinerary, user, deleteDayFromItinerary } = props;

  const url = useLocation().pathname;

  const formatDate = dateString => {
    if (dateString) {
      return new Date(dateString).toDateString();
    }
  };

  let tripDuration = 0;
  let endDate;

  const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  if (itinerary && itinerary.start_date) {
    itinerary.locations.forEach(location => {
      tripDuration += location.days.length;
    });

    endDate = addDays(itinerary.start_date, tripDuration).toDateString();
  } else if (itinerary) {
    itinerary.locations.forEach(
      location => (tripDuration += location.days.length)
    );
  }

  return (
    <div className='flex flex-col w-full pt-16 lg:ml-64'>
      <section className='flex flex-col w-full h-full my-8 space-y-6 divide-y divide-gray-300'>
        <div>
          <h2 className='pl-4 mx-8 mb-4 text-2xl font-bold border-l-8 border-teal-600 lg:mx-16'>
            Itinerary Overview
          </h2>
          <div className='flex flex-col p-4 mx-8 bg-gray-100 divide-y shadow-md rounded-xl divide lg:mx-16'>
            <div className='flex items-center py-2 pb-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6 mr-2'
              >
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
                  clipRule='evenodd'
                />
              </svg>
              <h1 className='text-xl font-bold'>
                {itinerary && itinerary.name}
              </h1>
              {url.includes('edit') && (
                <Link
                  to={itinerary && `/itineraries/${itinerary.id}/overview/edit`}
                >
                  Edit Itinerary
                </Link>
              )}
            </div>
            <div
              className={
                itinerary && itinerary.start_date
                  ? 'flex items-center py-2'
                  : 'hidden'
              }
            >
              {itinerary && itinerary.start_date && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-6 h-6 mr-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
              <p className=''>
                {itinerary &&
                  itinerary.start_date &&
                  `${formatDate(itinerary.start_date)} - ${endDate}`}
              </p>
            </div>
            <div className='flex items-center py-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-6 h-6 mr-2'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                  clipRule='evenodd'
                />
              </svg>
              <p>{tripDuration === 1 ? '1 Day' : `${tripDuration} Days`}</p>
            </div>
            <div className='flex items-center pt-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='flex-shrink-0 w-6 h-6 mr-2'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                  clipRule='evenodd'
                />
              </svg>
              <p className='py-2'>{itinerary && itinerary.description}</p>
            </div>
          </div>
        </div>
        {itinerary &&
          itinerary.locations &&
          itinerary.locations.map((location, index) => {
            return (
              <div key={index} className='mx-8 lg:mx-16'>
                <h2 className='mt-4 mb-2 ml-2 text-3xl font-bold'>
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
