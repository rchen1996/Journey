import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ErrorMessage from '../ErrorMessage';
import FormButton from '../FormButton';

export default function AddActivityForm(props) {
  const [activity, setActivity] = useState({
    start: '',
    end: '',
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

    console.log(activity);
    // if (userInfo.email === '') {
    //   setError({
    //     ...error,
    //     status: true,
    //     message: 'Please enter an email.',
    //   });
    //   return;
    // }

    // if (userInfo.password === '') {
    //   setError({
    //     ...error,
    //     status: true,
    //     message: 'Please enter a password.',
    //   });
    //   return;
    // }

    // props.onSave(userInfo.email, userInfo.password).then(res => {
    //   if (res.data.email) {
    //     setError({
    //       ...error,
    //       status: false,
    //       message: '',
    //     });

    //     props.dispatch({
    //       type: SET_USER,
    //       user: res.data,
    //     });

    //     history.push(`/dashboard/${res.data.id}`);
    //   } else if (res.data.error) {
    //     setError({
    //       ...error,
    //       status: true,
    //       message: 'Incorrect email or password.',
    //     });
    //   }
    // });
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
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            value={1}
            name="email"
            onChange={() => console.log('here')}
            type="text"
            placeholder="Email"
            className="mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600"
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
          <FormButton type="submit">Log in</FormButton>
        </footer>
      </form>
    </section>
  );
}

// CREATE TABLE "attractions" (
//   "id" serial PRIMARY KEY NOT NULL,
//   "name" varchar(255) NOT NULL,
//   "description" text NOT NULL,
//   "category" attraction_type NOT NULL,
//   "image" text,
//   "address" text NOT NULL,
//   "location" point NOT NULL,
//   "visible" boolean NOT NULL DEFAULT true
// );

// DROP TABLE IF EXISTS activities CASCADE;
// CREATE TABLE "activities" (
//   "id" serial PRIMARY KEY NOT NULL,
//   "day_id" int,
//   "start_time" time,
//   "end_time" time,
//   "attraction_id" int NOT NULL,
//   "itinerary_id" int NOT NULL
// );
