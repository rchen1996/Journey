import { useState, useEffect } from 'react';
import axios from 'axios';

import ItineraryListItem from './ItineraryListItem';

export default function ItineraryList(props) {
  const { searchItineraries, reload, deleteBookmark } = props;

  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    return axios.get('/api/itineraries').then(res => {
      const itineraries = res.data;
      setItineraries(itineraries);
      setLoading(false);
    });
  }, [reload]);

  const [searchTerm, setSearchTerm] = useState('');

  const [type, setType] = useState({
    couples: false,
    groups: false,
    families: false,
    solo: false,
    backpackers: false,
    luxury: false,
    business: false,
    accessibility: false,
  });

  const handleTypeChange = event => {
    const { checked, name } = event.target;
    setType({ ...type, [name]: checked });
  };

  const [length, setLength] = useState('');

  const HIDE = 'HIDE';
  const SHOW = 'SHOW';
  const [view, setView] = useState(HIDE);

  const [loading, setLoading] = useState(true);

  const advancedSearchView = () => {
    if (view === HIDE) {
      setView(SHOW);
    } else {
      setView(HIDE);
    }
  };

  const tripTypes = [
    'Couples',
    'Groups',
    'Families',
    'Solo',
    'Backpackers',
    'Luxury',
    'Business',
    'Accessibility',
  ];

  const parsedItineraries =
    itineraries.length > 0 &&
    itineraries.map(itinerary => (
      <ItineraryListItem
        key={itinerary.id}
        itinerary={itinerary}
        user={props.user}
        addBookmark={props.addBookmark}
        dispatch={props.dispatch}
        bookmarkItineraryIds={props.bookmarks.map(bookmark => bookmark.id)}
        bookmarks={props.bookmarks}
        deleteBookmark={deleteBookmark}
      />
    ));

  const search = event => {
    event.preventDefault();

    let query = searchTerm;
    if (searchTerm === '') {
      query = 'null';
    }

    const typeList = [];
    for (const typeKey in type) {
      if (type[typeKey]) {
        typeList.push(typeKey);
      }
    }

    let typeString = typeList.join();

    if (typeString === '') {
      typeString = 'null';
    }

    let tripLength = length;

    if (length === '') {
      tripLength = 'null';
    }

    setView(HIDE);
    setLoading(true);
    setSearchTerm('');
    setType({
      couples: false,
      groups: false,
      families: false,
      solo: false,
      backpackers: false,
      luxury: false,
      business: false,
      accessibility: false,
    });
    setLength('');

    if (view === HIDE) {
      searchItineraries(query, 'null', 'null').then(res => {
        setItineraries(res.data);

        setLoading(false);
      });
    } else {
      searchItineraries(query, typeString, tripLength).then(res => {
        setItineraries(res.data);

        setLoading(false);
      });
    }
  };

  return (
    <div className='w-full h-full pb-8 mt-16'>
      <form
        onSubmit={search}
        className='flex flex-col items-center w-full py-8 mb-8 shadow-md bg-gradient-to-b to-teal-600 from-blue-400'
      >
        <div className='flex flex-col w-3/4 p-4 py-6 mb-2 bg-gray-100 shadow-md md:w-3/4 lg:w-1/2 rounded-xl'>
          <div className='flex flex-col items-center pb-3 md:-ml-4'>
            <h1 className='pb-1 text-5xl font-black '>Explore</h1>
            <h2 className='text-center text-gray-500'>
              Get inspired by other members' explorations and adventures
            </h2>
          </div>
          <div className='flex'>
            <div className='flex items-center w-full mr-4'>
              <input
                value={searchTerm}
                name='search'
                onChange={event => setSearchTerm(event.target.value)}
                type='text'
                placeholder='Search'
                className='w-full border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
              />
              <button
                type='button'
                onClick={advancedSearchView}
                className='-ml-8'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
            <button
              type='submit'
              className='flex justify-between px-4 py-2 font-semibold text-gray-200 bg-teal-600 border-2 border-transparent rounded-xl focus:ring-teal-600 focus:ring-1'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-10 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
        {view === SHOW && (
          <div className='z-50 flex flex-col w-full my-2 bg-gray-100 divide-y shadow-xl md:mt-48 md:absolute md:w-3/4 lg:w-1/2 rounded-xl'>
            <h4 className='px-3 pt-3 font-bold'>Trip Type</h4>
            <div className='grid grid-cols-2 grid-rows-4 px-3 pt-3 my-2 sm:grid-cols-4 sm:grid-rows-2'>
              {tripTypes.map((tripType, index) => {
                return (
                  <div key={index}>
                    <input
                      type='checkbox'
                      id={tripType.toLowerCase()}
                      name={tripType.toLowerCase()}
                      value={tripType.toLowerCase()}
                      checked={type[tripType.toLowerCase()]}
                      onChange={handleTypeChange}
                      className='items-center mr-2 text-teal-600 border-gray-300 rounded focus:ring-teal-500 ring-offset-0'
                    />
                    <label htmlFor={tripType.toLowerCase()} className='text-sm'>
                      {tripType}
                    </label>
                  </div>
                );
              })}
            </div>
            <h4 className='px-3 py-2 font-bold'>Trip Length</h4>
            <div className='flex flex-col items-center px-4 pb-4'>
              {length ? (
                <span className='w-full my-2 text-sm font-semibold'>
                  {length <= 1 ? `${length} day` : `${length} days`}
                </span>
              ) : (
                <span className='w-full my-2 text-sm font-semibold'>
                  Any Length
                </span>
              )}
              <input
                type='range'
                min='1'
                max='20'
                increment='1'
                name='length'
                value={length}
                onChange={event => setLength(event.target.value)}
                className=''
              />
            </div>
          </div>
        )}
      </form>
      {loading === true && (
        <div className='flex justify-center w-full '>
          <img
            src='/images/status.png'
            className='w-8 h-8 animate-spin'
            alt='loading indicator'
          />
        </div>
      )}
      {loading === false && parsedItineraries.length > 0 && (
        <section className='grid w-full gap-4 px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-rows'>
          {parsedItineraries}
        </section>
      )}
      {loading === false && itineraries.length === 0 && (
        <div className='px-2 font-bold'>No Itineraries Found</div>
      )}
    </div>
  );
}
