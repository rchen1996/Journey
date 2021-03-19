import { useState } from 'react';

import ItineraryListItem from './ItineraryListItem';

export default function ItineraryList(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const parsedItineraries = props.itineraries.map(itinerary => (
    <ItineraryListItem
      key={itinerary.id}
      itinerary={itinerary}
      user={props.user}
      addBookmark={props.addBookmark}
      dispatch={props.dispatch}
      bookmarks={props.bookmarks.map(bookmark => bookmark.id)}
    />
  ));

  const search = event => {
    event.preventDefault();
  };

  return (
    <div className='pt-16'>
      <h1>Explore</h1>
      <form onSubmit={search}>
        <h4>Search By:</h4>
        <p>Location, Itinerary Name, Popularity, Trip Length, Trip Type</p>
        <input
          value={searchTerm}
          name='search'
          onChange={event => setSearchTerm(event.target.value)}
          type='text'
          placeholder='Search for an itinerary'
          className='mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
        <button
          type='submit'
          className='flex justify-between px-4 py-2 font-semibold text-gray-200 bg-teal-600 border-2 border-transparent rounded-xl focus:ring-teal-600 focus:ring-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </form>
      <section className='grid w-full gap-4 m-8 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-rows'>
        {parsedItineraries}
      </section>
    </div>
  );
}
