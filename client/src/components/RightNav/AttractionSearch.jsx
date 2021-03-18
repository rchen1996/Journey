import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Checkbox from './Checkbox';
import axios from 'axios';
import { SET_ATTRACTIONS } from '../../reducers/application';
import AttractionsListItem from './AttractionsListItem';

export default function AttractionSearch(props) {
  const { itinerary, dispatch, searchAttractions, addMyLocation } = props;

  const attractionList = props.attractions;

  const { day_id } = useParams();

  const [dropDown, setDropDown] = useState({
    subMenuOpen: false,
  });

  let currentLocation;

  itinerary.locations.forEach(location => {
    location.days.forEach(day => {
      if (day.id === Number(day_id)) {
        currentLocation = location.name;
      }
    });
  });

  useEffect(() => {
    axios
      .get(`/api/attractions/${currentLocation}/null/null`)
      .then(attractions => {
        dispatch({
          type: SET_ATTRACTIONS,
          attractions: attractions,
        });
      });
  }, [currentLocation, dispatch]);

  const [searchTerms, setSearchTerms] = useState({
    location: currentLocation,
    name: '',
  });

  const [category, setCategory] = useState({
    adult: false,
    amusement: false,
    accomodation: false,
    landmark: false,
    sport: false,
    food: false,
    cultural: false,
    nature: false,
  });

  const LOADING = 'LOADING';
  const SHOW = 'SHOW';

  const [view, setView] = useState(LOADING);

  if (attractionList) {
    setView(SHOW);
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  const handleCategoryChange = event => {
    const { checked, name } = event.target;
    setCategory({ ...category, [name]: checked });
  };

  const search = event => {
    event.preventDefault();

    const checkedCategories = [];

    for (const term in category) {
      if (category[term]) {
        checkedCategories.push(term);
      }
    }

    let categoryString = 'null';

    if (checkedCategories.length > 0) {
      categoryString = checkedCategories.join();
    }

    let query = searchTerms.name;

    if (query === '') {
      query = 'null';
    }

    setView(LOADING);

    searchAttractions(searchTerms.location, query, categoryString).then(res => {
      if (!res.data.error) {
        dispatch({
          type: SET_ATTRACTIONS,
          attractions: res.data,
        });
      }
    });
  };

  const handleDropDown = () => {
    setDropDown(prev => {
      return {
        ...prev,
        subMenuOpen: prev.subMenuOpen ? false : true,
      };
    });
  };

  const categories = [
    'Adult',
    'Amusement',
    'Accomadation',
    'Landmark',
    'Sport',
    'Food',
    'Cultural',
    'Nature',
  ];

  return (
    <div className='flex flex-col justify-center space-y-2'>
      <form
        onSubmit={search}
        className='divide-y divide-gray-300 divide-opacity-50'
      >
        <div className='flex flex-col py-2 space-y-1'>
          <label htmlFor='location' className='text-lg font-bold text-gray-100'>
            Location
          </label>
          <select
            name='location'
            value={searchTerms.location}
            onChange={handleChange}
            className='mb-4 text-gray-600 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
          >
            {itinerary.locations.map(location => {
              return (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className='py-2 space-y-1'>
          <div
            onClick={handleDropDown}
            className='flex items-center justify-between mr-4 cursor-pointer'
          >
            <p className='text-lg font-bold text-gray-100'>Filter</p>
            <svg
              width='12'
              height='12'
              viewBox='0 0 14 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={
                dropDown.subMenuOpen
                  ? 'transform duration-300 -rotate-0 cursor-pointer pointer-events-none ml-3'
                  : 'transform duration-300 -rotate-90 cursor-pointer pointer-events-none ml-3'
              }
            >
              <path
                d='M7.86603 10.5001C7.48112 11.1667 6.51887 11.1667 6.13397 10.5001L0.937822 1.50006C0.552922 0.833392 1.03405 5.98142e-05 1.80385 5.98815e-05L12.1962 6.079e-05C12.966 6.08573e-05 13.4471 0.833394 13.0622 1.50006L7.86603 10.5001Z'
                fill='#F4F4F5'
              />
            </svg>
          </div>
          <div className={dropDown.subMenuOpen ? 'space-y-1' : 'hidden'}>
            {categories.map((categoryName, index) => {
              return (
                <Checkbox
                  key={index}
                  name={categoryName}
                  category={category}
                  handleCategoryChange={handleCategoryChange}
                ></Checkbox>
              );
            })}
          </div>
        </div>
        <div className='py-2'>
          <label htmlFor='name' className='text-lg font-bold text-gray-100 '>
            Attraction Name
          </label>
          <input
            value={searchTerms.name}
            name='name'
            onChange={handleChange}
            type='text'
            placeholder='Landmarks, Restaurants, etc.'
            className='w-full mt-1 mb-2 text-gray-600 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
          ></input>
          <button
            type='submit'
            className='flex justify-between w-full px-4 py-2 font-semibold text-gray-200 bg-teal-600 border-2 border-transparent hover:text-gray-200 rounded-xl hover:border-gray-200 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
          >
            Search
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
        </div>
      </form>
      {view === LOADING && (
        <div className='flex justify-center w-full '>
          <img
            src='/images/status.png'
            className='w-8 h-8 animate-spin'
            alt='loading indicator'
          />
        </div>
      )}
      {view === SHOW && (
        <div className='text-white'>
          <p>This is where attractions appear</p>
          {attractionList &&
            attractionList.map(attraction => {
              return (
                <AttractionsListItem
                  key={attraction.id}
                  attraction={attraction}
                  dayId={day_id}
                  addMyLocation={addMyLocation}
                  itinerary={itinerary}
                  dispatch={dispatch}
                />
              );
            })}
        </div>
      )}
    </div>
  );
}
