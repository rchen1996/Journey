import { useState } from 'react';
import { SET_ITINERARY } from '../reducers/application';

import FormButton from './FormButton';

export default function NewItineraryForm(props) {
  const [itineraryInfo, setItineraryInfo] = useState({
    name: '',
    description: "My group's itinerary",
    tripType: '',
    image: '',
    startDate: '',
    endDate: '',
  });

  const [error, setError] = useState('');

  const handleChange = event => {
    const { value, name } = event.target;
    setItineraryInfo({ ...itineraryInfo, [name]: value });
  };

  const save = () => {
    if (itineraryInfo.name === '') {
      setError('Itinerary name cannot be blank');
      return;
    }

    if (itineraryInfo.description === '') {
      setError('Itinerary description cannot be blank');
      return;
    }

    if (itineraryInfo.tripType === '') {
      setError('Trip type cannot be blank');
      return;
    }

    props.onSave(itineraryInfo).then(res => {
      if (res.data.id) {
        setError('');
        props.dispatch({
          type: SET_ITINERARY,
          itinerary: res.data,
        });
      } else if (res.data.error) {
        setError('You must be logged in to create an itinerary');
      }
    });
  };

  return (
    <div>
      <div>{error}</div>
      <form onSubmit={event => event.preventDefault()}>
        <label htmlFor="name">Itinerary Name</label>
        <input
          value={itineraryInfo.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Itinerary Name"
        />
        <label htmlFor="description">Description</label>
        <input
          value={itineraryInfo.description}
          name="description"
          onChange={handleChange}
          type="text"
          placeholder="Description"
        />
        <label htmlFor="tripType">Trip Type</label>
        <select
          name="tripType"
          value={itineraryInfo.tripType}
          onChange={handleChange}
        >
          <option defaultValue></option>
          <option value="couples">Couples</option>
          <option value="groups">Groups</option>
          <option value="families">Families</option>
          <option value="backpackers">Backpackers</option>
          <option value="solo">Solo</option>
          <option value="luxury">Luxury</option>
          <option value="business">Business</option>
          <option value="accessibility">Accessibility</option>
        </select>
        <label htmlFor="image">Itinerary Cover Image URL</label>
        <input
          value={itineraryInfo.image}
          name="image"
          onChange={handleChange}
          type="url"
          placeholder="Image URL"
        />
        <label htmlFor="startDate">Trip Start Date</label>
        <input
          value={itineraryInfo.startDate}
          name="startDate"
          onChange={handleChange}
          type="date"
        />
        <label htmlFor="endDate">Trip End Date</label>
        <input
          value={itineraryInfo.endDate}
          name="endDate"
          onChange={handleChange}
          type="date"
        />
        <FormButton onClick={save}>Create Itinerary</FormButton>
      </form>
    </div>
  );
}
