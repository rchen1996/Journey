import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SET_ITINERARY } from '../reducers/application';

import FormButton from './FormButton';
import ErrorMessage from './ErrorMessage';

export default function NewItineraryForm(props) {
  const [itineraryInfo, setItineraryInfo] = useState({
    name: '',
    description: "My group's itinerary",
    tripType: '',
    image: '',
    startDate: '',
    endDate: '',
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
        message: 'Please enter an description name.',
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

    props.onSave(itineraryInfo).then(res => {
      if (res.data.id) {
        setError({
          ...error,
          status: false,
          message: '',
        });
        props.dispatch({
          type: SET_ITINERARY,
          itinerary: res.data,
        });

        history.push(`/itineraries/${res.data.id}/edit`);
      } else if (res.data.error) {
        setError({
          ...error,
          status: true,
          message: 'You must be logged in to create an itinerary.',
        });
      }
    });
  };

  const cancel = () => {
    history.push(`/dashboard/${props.user.id}`);
  };

  return (
    <section className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col w-1/2 py-8'>
        <h1 className='mb-4 ml-1 text-2xl font-bold'>
          Let's Go on an Adventure!
        </h1>
        <div className='w-full shadow-lg bg-gray-50 rounded-xl'>
          <ErrorMessage
            isError={error.status}
            show={error.show}
            hide={error.hide}
            message={error.message}
          ></ErrorMessage>
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
              <div className='flex justify-between space-x-8'>
                <div className='flex flex-col w-1/2'>
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
                <div className='flex flex-col w-1/2'>
                  <label htmlFor='endDate' className='ml-1 font-semibold'>
                    Trip End Date
                  </label>
                  <input
                    value={itineraryInfo.endDate}
                    name='endDate'
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
            <footer className='flex items-center justify-between px-8 py-3 bg-gray-300 bg-opacity-50 rounded-b-xl'>
              <FormButton type='submit'>Create Itinerary</FormButton>
              <FormButton type='button' onClick={cancel}>
                Cancel
              </FormButton>
            </footer>
          </form>
        </div>
      </div>
    </section>
  );
}
