import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
    category: '',
    name: '',
  });

  const handleChange = event => {
    const { value, name } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value });
  };

  const search = event => {
    event.preventDefault();
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
          className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        >
          {itinerary.locations.map(location => {
            return <option value={location.name}>{location.name}</option>;
          })}
        </select>
        {/* selector for kinds/categories */}
        {/* search bar for attraction name */}
        {/* submit button - icon */}
      </form>
    </div>
  );
}
