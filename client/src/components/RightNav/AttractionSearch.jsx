import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FormButton from '../FormButton';

export default function AttractionSearch(props) {
  const { itinerary } = props;

  const { day_id } = useParams();

  let currentLocation;

  itinerary.locations.forEach(location => {
    location.days.forEach(day => {
      if (day.id === Number(day_id)) {
        currentLocation = location.name;
      }
    });
  });

  const [searchTerms, setSearchTerms] = useState({
    location: currentLocation,
    category: 'auto',
    name: '',
  });

  const LOADING = 'LOADING';
  const SHOW = 'SHOW';

  const [view, setView] = useState(SHOW);

  const handleChange = event => {
    const { value, name } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  const search = event => {
    event.preventDefault();

    setView(LOADING);
  };

  return (
    <div>
      <form onSubmit={search}>
        <label htmlFor='location' className='font-semibold text-white'>
          Location
        </label>
        <select
          name='location'
          value={searchTerms.location}
          onChange={handleChange}
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        >
          {itinerary.locations.map(location => {
            return (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            );
          })}
        </select>
        <label htmlFor='category' className='font-semibold text-white'>
          Attraction Type
        </label>
        <select
          name='category'
          value={searchTerms.category}
          onChange={handleChange}
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        >
          <option value='auto'>Auto Suggest</option>
          <option value='adult'>Adult</option>
          <option value='amusement'>Amusement</option>
          <option value='accomodation'>Accomodation</option>
          <option value='landmark'>Landmark</option>
          <option value='sport'>Sport</option>
          <option value='food'>Food</option>
          <option value='cultural'>Cultural</option>
          <option value='nature'>Nature</option>
        </select>
        <label htmlFor='name' className='font-semibold text-white'>
          Attraction Name
        </label>
        <input
          value={searchTerms.name}
          name='name'
          onChange={handleChange}
          type='text'
          placeholder='Landmark name, Restaurant name, etc.'
          className='mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        ></input>
        <FormButton type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            />
          </svg>
        </FormButton>
      </form>
      {view === LOADING && (
        <img
          src='/images/status.png'
          className='animate-spin'
          alt='loading indicator'
        />
      )}
      {view === SHOW && (
        <div className='text-white'>This is where attractions appear</div>
      )}
    </div>
  );
}
