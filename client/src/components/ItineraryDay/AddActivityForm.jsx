import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { SET_ITINERARY } from '../../reducers/application';

import ErrorMessage from '../ErrorMessage';
import FormButton from '../FormButton';

export default function AddActivityForm(props) {
  const { itinerary_id, day_id } = useParams();

  const [activity, setActivity] = useState({
    start: '',
    end: '',
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

        history.push(`/itineraries/${itinerary_id}/days/${day_id}`);
      } else if (res.data.error) {
        setError({
          ...error,
          status: true,
          message:
            'You do not have permissions to add an activity to this itinerary',
        });
      }
    });
  };

  const cancel = () => {
    history.push(`/itineraries/${itinerary_id}/days/${day_id}`);
  };

  return (
    <section className="w-full shadow-lg bg-gray-50 rounded-xl">
      <ErrorMessage
        isError={error.status}
        show={error.show}
        hide={error.hide}
        message={error.message}
      ></ErrorMessage>
      <form onSubmit={event => save(event)} className="flex flex-col">
        <div className="flex flex-col mx-8 my-6">
          <label htmlFor="name" className="font-semibold">
            Activity Name
          </label>
          <input
            value={activity.name}
            name="name"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="Climb Mt. Everest"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          />
          <label htmlFor="category" className="font-semibold">
            Category
          </label>
          <select
            name="category"
            value={activity.category}
            onChange={event => handleChange(event)}
            className="mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          >
            <option defaultValue></option>
            <option value="adult">Adult</option>
            <option value="amusement">Amusement</option>
            <option value="accomodation">Accomodation</option>
            <option value="landmark">Landmark</option>
            <option value="sport">Sport</option>
            <option value="food">Food</option>
            <option value="cultural">Cultural</option>
            <option value="nature">Nature</option>
          </select>
          <label htmlFor="street" className="font-semibold">
            Street Address
          </label>
          <input
            value={activity.street}
            name="street"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="123 Main Street"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <input
            value={activity.city}
            name="city"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="New York City"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="state" className="font-semibold">
            State / Province
          </label>
          <input
            value={activity.state}
            name="state"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="New York"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="country" className="font-semibold">
            Country
          </label>
          <input
            value={activity.country}
            name="country"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="USA"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="postal" className="font-semibold">
            Zip / Postal Code
          </label>
          <input
            value={activity.postal}
            name="postal"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="12345"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="image" className="font-semibold">
            Image
          </label>
          <input
            value={activity.image}
            name="image"
            onChange={event => handleChange(event)}
            type="url"
            placeholder="Image URL"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            value={activity.description}
            name="description"
            onChange={event => handleChange(event)}
            type="text"
            placeholder="Let's climb Mt. Everest in one day!"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600 resize-none"
          />
          <label htmlFor="start" className="font-semibold">
            Start Time
          </label>
          <input
            value={activity.start}
            name="start"
            onChange={event => handleChange(event)}
            type="time"
            className="mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          />
          <label htmlFor="end" className="font-semibold">
            End Time
          </label>
          <input
            value={activity.end}
            name="end"
            onChange={event => handleChange(event)}
            type="time"
            className="mb-2 border-gray-300 rounded-md focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
          />
        </div>
        <footer className="flex items-center justify-between px-8 py-3 bg-gray-300 bg-opacity-50 rounded-b-xl">
          <FormButton type="submit">Save</FormButton>
          <FormButton type="button" onClick={cancel}>
            Cancel
          </FormButton>
        </footer>
      </form>
    </section>
  );
}
