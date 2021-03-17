import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormButton from '../FormButton';

export default function AttractionSearch(props) {
  const { itinerary } = props;

  const { day_id } = useParams();

  useEffect(() => {
    //default on load will get autosuggestions
  }, []);

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

  const [view, setView] = useState(SHOW);

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
        <div>
          <p className='font-semibold text-white'>Filter by Attraction Type:</p>
          <div>
            <input
              type='checkbox'
              id='adult'
              name='adult'
              value='adult'
              checked={category.adult}
              onChange={handleCategoryChange}
            />
            <label htmlFor='adult' className='text-white'>
              Adult
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='amusement'
              name='amusement'
              value='amusement'
              checked={category.amusement}
              onChange={handleCategoryChange}
            />
            <label htmlFor='amusement' className='text-white'>
              Amusement
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='accomodation'
              name='accomodation'
              value='accomodation'
              checked={category.accomodation}
              onChange={handleCategoryChange}
            />
            <label htmlFor='accomodation' className='text-white'>
              Accomodation
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='landmark'
              name='landmark'
              value='landmark'
              checked={category.landmark}
              onChange={handleCategoryChange}
            />
            <label htmlFor='landmark' className='text-white'>
              Landmark
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='sport'
              name='sport'
              value='sport'
              checked={category.sport}
              onChange={handleCategoryChange}
            />
            <label htmlFor='sport' className='text-white'>
              Sport
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='food'
              name='food'
              value='food'
              checked={category.food}
              onChange={handleCategoryChange}
            />
            <label htmlFor='food' className='text-white'>
              Food
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='cultural'
              name='cultural'
              value='cultural'
              checked={category.cultural}
              onChange={handleCategoryChange}
            />
            <label htmlFor='cultural' className='text-white'>
              Cultural
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='nature'
              name='nature'
              value='nature'
              checked={category.nature}
              onChange={handleCategoryChange}
            />
            <label htmlFor='nature' className='text-white'>
              Nature
            </label>
          </div>
        </div>
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
