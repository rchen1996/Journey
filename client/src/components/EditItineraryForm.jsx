import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SET_ITINERARY } from '../reducers/application';

import AlertMessage from './AlertMessage';
import FormButton from './FormButton';

export default function EditItineraryForm(props) {
  const { itinerary, dispatch, onSave } = props;

  const [itineraryInfo, setItineraryInfo] = useState({
    id: itinerary.id,
    name: itinerary.name,
    description: itinerary.description,
    tripType: itinerary.trip_type,
    image: itinerary.image,
    startDate: itinerary.start_date || '',
  });

  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
  });

  let history = useHistory();

  const handleChange = event => {
    const { value, name } = event.target;
    setItineraryInfo({ ...itineraryInfo, [name]: value });
  };

  const save = event => {
    event.preventDefault();

    if (itineraryInfo.name === '') {
      setError({
        ...error,
        status: true,
        message: 'Please enter an itinerary name.',
      });
      return;
    }

    if (itineraryInfo.description === '') {
      setError({
        ...error,
        status: true,
        message: 'Please enter a description.',
      });
      return;
    }

    if (itineraryInfo.tripType === '') {
      setError({
        ...error,
        status: true,
        message: 'Please choose a trip type.',
      });
      return;
    }

    onSave(itineraryInfo).then(res => {
      if (res.data.id) {
        setError({
          ...error,
          status: false,
          message: '',
        });
        dispatch({
          type: SET_ITINERARY,
          itinerary: res.data,
        });

        history.push(`/itineraries/${res.data.id}/edit`);
      } else if (res.data.error) {
        setError({
          ...error,
          status: true,
          message: res.data.error,
        });
      }
    });
  };

  const cancel = () => {
    history.push(`/itineraries/${itinerary.id}/edit`);
  };

  return (
    <section className='flex justify-center w-full h-full mt-16 lg:ml-64'>
      <div className='flex flex-col w-3/4 py-8 2xl:w-1/2'>
        <h1 className='pl-4 mb-4 ml-1 text-2xl font-bold border-l-8 border-teal-600'>
          Edit Itinerary Information
        </h1>
        <div className='w-full shadow-lg bg-gray-50 rounded-xl'>
          <AlertMessage
            isError={error.status}
            show={error.show}
            hide={error.hide}
            message={error.message}
          ></AlertMessage>
          <form onSubmit={event => save(event)} className='flex flex-col'>
            <div className='flex flex-col mx-8 my-6'>
              <label htmlFor='name' className='ml-1 font-semibold'>
                Itinerary Name
              </label>
              <input
                value={itineraryInfo.name}
                name='name'
                onChange={handleChange}
                type='text'
                className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                placeholder='Itinerary Name'
              />
              <label htmlFor='tripType' className='ml-1 font-semibold'>
                Trip Type
              </label>
              <select
                name='tripType'
                value={itineraryInfo.tripType}
                onChange={handleChange}
                className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
              >
                <option defaultValue></option>
                <option value='couples'>Couples</option>
                <option value='groups'>Groups</option>
                <option value='families'>Families</option>
                <option value='backpackers'>Backpackers</option>
                <option value='solo'>Solo</option>
                <option value='luxury'>Luxury</option>
                <option value='business'>Business</option>
                <option value='accessibility'>Accessibility</option>
              </select>
              <div className='flex flex-col justify-between lg:space-x-8 lg:flex-row'>
                <div className='flex flex-col lg:w-1/2'>
                  <label htmlFor='startDate' className='ml-1 font-semibold'>
                    Trip Start Date
                  </label>
                  <input
                    value={itineraryInfo.startDate}
                    name='startDate'
                    onChange={handleChange}
                    type='date'
                    className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                  />
                </div>
              </div>
              <label htmlFor='image' className='ml-1 font-semibold'>
                Itinerary Cover Image
              </label>
              <input
                value={itineraryInfo.image}
                name='image'
                onChange={handleChange}
                type='url'
                placeholder='Image URL'
                className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
              />
              <label htmlFor='description' className='ml-1 font-semibold'>
                Description
              </label>
              <textarea
                value={itineraryInfo.description}
                name='description'
                onChange={handleChange}
                type='text'
                className='border-gray-300 rounded-md appearance-none resize-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                placeholder='Description'
                rows='3'
              />
            </div>
            <footer className='flex items-center px-8 py-3 space-x-4 bg-gray-300 bg-opacity-50 rounded-b-xl'>
              <FormButton type='submit'>Save</FormButton>
              <button
                type='button'
                onClick={cancel}
                className='hover:underline hover:text-teal-600 focus:outline-none'
              >
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
