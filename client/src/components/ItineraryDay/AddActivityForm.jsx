import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SET_ITINERARY } from '../../reducers/application';

import AlertMessage from '../AlertMessage';
import FormButton from '../FormButton';

export default function AddActivityForm(props) {
  const { itinerary_id, day_id } = useParams();

  const [activity, setActivity] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postal: '',
  });

  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden flex p-3 mx-8 mt-8 bg-red-700 bg-opacity-50 rounded-xl',
  });

  const history = useHistory();

  const handleChange = event => {
    let { value, name } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const save = event => {
    event.preventDefault();

    if (activity.name === '') {
      setError({
        ...error,
        status: true,
        message: 'Please enter an activity name.',
      });
      return;
    }

    if (activity.description === '') {
      setError({
        ...error,
        status: true,
        message: 'Please enter a description.',
      });
      return;
    }

    if (activity.category === '') {
      setError({
        ...error,
        status: true,
        message: 'Please select a category for your activity.',
      });
      return;
    }

    if (
      activity.street === '' ||
      activity.city === '' ||
      activity.state === '' ||
      activity.country === '' ||
      activity.postal === ''
    ) {
      setError({
        ...error,
        status: true,
        message: 'Please enter all address fields.',
      });
      return;
    }

    props.onSave(activity, itinerary_id, day_id).then(res => {
      if (res.data.id) {
        setError({
          ...error,
          status: false,
          message: '',
        });

        const itinerary = { ...res.data };
        itinerary.users = [...props.itinerary.users];
        props.dispatch({
          type: SET_ITINERARY,
          itinerary: itinerary,
        });

        history.push(`/itineraries/${itinerary_id}/days/${day_id}/edit`);
      } else if (res.data.error) {
        setError({
          ...error,
          status: true,
          message:
            'You do not have permissions to add an activity to this itinerary.',
        });
      } else if (res.data.addressError) {
        setError({
          ...error,
          status: true,
          message: 'Please enter a valid address.',
        });
      }
    });
  };

  const cancel = () => {
    history.push(`/itineraries/${itinerary_id}/days/${day_id}/edit`);
  };

  return (
    <div className='w-full h-full mt-16 lg:ml-64'>
      <section className='w-5/6 mx-auto my-8 lg:w-2/3 h-5/6'>
        <h1 className='pl-4 mb-4 text-2xl font-bold border-l-8 border-teal-600'>
          Add Activity
        </h1>
        <AlertMessage
          isError={error.status}
          show={error.show}
          hide={error.hide}
          message={error.message}
        ></AlertMessage>
        <form
          onSubmit={event => save(event)}
          className='flex flex-col h-full shadow-md bg-gray-50 rounded-xl'
        >
          <div className='flex flex-col h-full mx-8 my-6'>
            <div className='flex flex-col justify-between lg:space-x-8 lg:flex-row'>
              <div className='flex flex-col lg:w-1/2'>
                <label htmlFor='name' className='font-semibold'>
                  Activity Name
                </label>
                <input
                  value={activity.name}
                  name='name'
                  onChange={event => handleChange(event)}
                  type='text'
                  placeholder='Climb Mt. Everest'
                  className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                />
              </div>
              <div className='flex flex-col lg:w-1/2'>
                <label htmlFor='category' className='font-semibold'>
                  Category
                </label>
                <select
                  name='category'
                  value={activity.category}
                  onChange={event => handleChange(event)}
                  className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                >
                  <option defaultValue></option>
                  <option value='adult'>Adult</option>
                  <option value='amusement'>Amusement</option>
                  <option value='accomodation'>Accomodation</option>
                  <option value='landmark'>Landmark</option>
                  <option value='sport'>Sport</option>
                  <option value='food'>Food</option>
                  <option value='cultural'>Cultural</option>
                  <option value='nature'>Nature</option>
                </select>
              </div>
            </div>
            <label htmlFor='street' className='font-semibold'>
              Street Address
            </label>
            <input
              value={activity.street}
              name='street'
              onChange={event => handleChange(event)}
              type='text'
              placeholder='123 Main Street'
              className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
            />
            <label htmlFor='city' className='font-semibold'>
              City
            </label>
            <input
              value={activity.city}
              name='city'
              onChange={event => handleChange(event)}
              type='text'
              placeholder='New York City'
              className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
            />
            <div className='flex flex-col justify-between lg:space-x-8 lg:flex-row'>
              <div className='flex flex-col lg:w-1/2'>
                <label htmlFor='state' className='font-semibold'>
                  State / Province
                </label>
                <input
                  value={activity.state}
                  name='state'
                  onChange={event => handleChange(event)}
                  type='text'
                  placeholder='New York'
                  className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                />
              </div>
              <div className='flex flex-col lg:w-1/2'>
                <label htmlFor='postal' className='font-semibold'>
                  Zip / Postal Code
                </label>
                <input
                  value={activity.postal}
                  name='postal'
                  onChange={event => handleChange(event)}
                  type='text'
                  placeholder='12345'
                  className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                />
              </div>
            </div>
            <label htmlFor='country' className='font-semibold'>
              Country
            </label>
            <input
              value={activity.country}
              name='country'
              onChange={event => handleChange(event)}
              type='text'
              placeholder='USA'
              className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
            />
            <label htmlFor='image' className='font-semibold'>
              Image
            </label>
            <input
              value={activity.image}
              name='image'
              onChange={event => handleChange(event)}
              type='url'
              placeholder='Image URL'
              className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
            />
            <label htmlFor='description' className='font-semibold'>
              Description
            </label>
            <textarea
              value={activity.description}
              name='description'
              onChange={event => handleChange(event)}
              type='text'
              placeholder="Let's climb Mt. Everest in one day!"
              className='mb-4 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
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
      </section>
    </div>
  );
}
