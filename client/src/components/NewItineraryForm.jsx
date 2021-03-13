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
      if (res.data[0].id) {
        setError('');
        props.dispatch({
          type: SET_ITINERARY,
          itinerary: res.data[0],
        });
      } else if (res.data.error) {
        setError('You must be logged in to create an itinerary');
      }
    });
  };

  return (
    <section className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col w-1/2 py-20">
        <h1 className="mb-4 ml-1 text-2xl font-bold">
          Let's Go on an Adventure!
        </h1>
        <div className="w-full shadow-lg bg-gray-50 rounded-xl">
          <div>{error}</div>
          <form
            onSubmit={event => event.preventDefault()}
            className="flex flex-col"
          >
            <div className="flex flex-col mx-8 my-6">
              <label htmlFor="name" className="ml-1 font-semibold">
                Itinerary Name
              </label>
              <input
                value={itineraryInfo.name}
                name="name"
                onChange={handleChange}
                type="text"
                className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
                placeholder="Itinerary Name"
              />
              <label htmlFor="description" className="ml-1 font-semibold">
                Description
              </label>
              <input
                value={itineraryInfo.description}
                name="description"
                onChange={handleChange}
                type="text"
                className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
                placeholder="Description"
              />
              <label htmlFor="tripType" className="ml-1 font-semibold">
                Trip Type
              </label>
              <select
                name="tripType"
                value={itineraryInfo.tripType}
                onChange={handleChange}
                className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
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
              <label htmlFor="image" className="ml-1 font-semibold">
                Itinerary Cover Image URL
              </label>
              <input
                value={itineraryInfo.image}
                name="image"
                onChange={handleChange}
                type="url"
                placeholder="Image URL"
                className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
              />
              <label htmlFor="startDate" className="ml-1 font-semibold">
                Trip Start Date
              </label>
              <input
                value={itineraryInfo.startDate}
                name="startDate"
                onChange={handleChange}
                type="date"
                className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
              />
              <label htmlFor="endDate" className="ml-1 font-semibold">
                Trip End Date
              </label>
              <input
                value={itineraryInfo.endDate}
                name="endDate"
                onChange={handleChange}
                type="date"
                className="border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
              />
            </div>
            <footer className="flex items-center justify-between px-8 py-3 bg-gray-300 bg-opacity-50 rounded-b-xl">
              <FormButton onClick={save}>Create Itinerary</FormButton>
              <FormButton onClick={save}>Cancel</FormButton>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
