import { useState } from 'react';

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

    // props.onSave(itineraryInfo).then(res => {
    //   if (res.data.email) {
    //     setError('');
    //     props.dispatch({
    //       type: SET_USER,
    //       user: res.data,
    //     });
    //   } else if (res.data.error) {
    //     setError('Incorrect email or password');
    //   }
    // });
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
        <select name="tripType">
          <option disabled selected value></option>
          <option value="couples">Couples</option>
          <option value="groups">Groups</option>
          <option value="families">Families</option>
          <option value="backpackers">Backpackers</option>
          <option value="solo">Solo</option>
          <option value="luxury">Luxury</option>
          <option value="business">Business</option>
          <option value="accessibility">Accessibility</option>
        </select>
        <FormButton onClick={save}>Create Itinerary</FormButton>
      </form>
    </div>
  );
}
