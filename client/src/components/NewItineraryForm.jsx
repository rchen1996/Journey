import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SET_ITINERARY } from '../reducers/application';

import FormButton from './FormButton';
import AlertMessage from './AlertMessage';

export default function NewItineraryForm(props) {
  const [itineraryInfo, setItineraryInfo] = useState({
    name: '',
    description: "My group's itinerary",
    tripType: '',
    image: '',
    startDate: '',
  });

  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mb-4 bg-red-700 bg-opacity-50 rounded-xl ',
    hide: 'hidden',
  });

  const [visibility, setVisibility] = useState(false);
  const [translate, setTranslate] = useState('');
  const handleVisibility = event => {
    if (visibility) {
      setVisibility(false);
      setTranslate('');
    } else {
      setVisibility(true);
      setTranslate('transform translate-x-full bg-teal-600');
    }
  };

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

    props.onSave(itineraryInfo, visibility).then(res => {
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
    <section className='flex flex-col items-center w-full h-full mt-16'>
      <div className='flex flex-col w-3/4 py-8 2xl:w-1/2'>
        <h1 className='mb-4 ml-1 text-2xl font-bold'>
          Let's Go on an Adventure!
        </h1>
        <AlertMessage
          isError={error.status}
          show={error.show}
          hide={error.hide}
          message={error.message}
        ></AlertMessage>
        <div className='w-full shadow-lg bg-gray-50 rounded-xl'>
          <form onSubmit={event => save(event)} className='flex flex-col'>
            <div className='flex flex-col mx-8 my-6'>
              <div className='flex flex-col justify-between md:space-x-8 md:flex-row'>
                <div className='flex flex-col md:w-11/12'>
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
                </div>
                <div className='flex flex-col justify-center pb-4 md:items-center lg:w-1/12'>
                  <label className='font-semibold'>
                    {visibility ? 'Public' : 'Private'}
                  </label>
                  <div className=''>
                    <label
                      htmlFor='visible'
                      className='flex p-2 ml-1 -mt-1 cursor-pointer'
                    >
                      <div className='relative'>
                        <input
                          type='checkbox'
                          className='hidden'
                          id='visible'
                          name='visible'
                          value={visibility}
                          checked={visibility}
                          onChange={handleVisibility}
                        />
                        <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line'></div>
                        <div
                          className={`-mt-1 -ml-1 transition-all duration-300 ease-in-out absolute w-6 h-6 bg-gray-300 rounded-full shadow inset-y-0 left-0 ${translate}`}
                        ></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
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
                    min={
                      new Date(
                        new Date().getTime() -
                          new Date().getTimezoneOffset() * 60000
                      )
                        .toISOString()
                        .split('T')[0]
                    }
                    className='mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                  />
                </div>
                <div className='flex flex-col lg:w-1/2'>
                  <label htmlFor='tripType' className='ml-1 font-semibold'>
                    Trip Type
                  </label>
                  <select
                    name='tripType'
                    value={itineraryInfo.tripType}
                    onChange={handleChange}
                    className={`mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600`}
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
              <FormButton type='submit'>Create Itinerary</FormButton>
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
