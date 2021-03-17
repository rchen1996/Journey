import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import DeleteConfirmation from '../DeleteConfirmation';
import FormButton from '../FormButton';

export default function ItineraryDayActivities(props) {
  const { activity, editActivity, timeSlots } = props;
  const history = useHistory();
  const url = useLocation().pathname;
  const { itinerary_id, day_id } = useParams();

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';
  const [view, setView] = useState(DEFAULT);

  const BASE = 'BASE';
  const EDIT = 'EDIT';
  const [editMode, setEditMode] = useState(BASE);
  const [error, setError] = useState({
    status: false,
    message: '',
    show: '',
    hide: '',
  });

  const [activityForm, setActivityForm] = useState({
    start_time: activity.start_time,
    end_time: activity.end_time,
    notes: activity.notes,
  });

  const getTimeValue = timeString => {
    const timeValue = new Date('1970-01-01T' + timeString + 'Z');
    return timeValue;
  };

  const ifAvailable = (start_time, end_time) => {
    let available = true;
    const sortedTimeSlots = timeSlots.filter(
      slot => slot.activity_id !== activity.id
    );
    sortedTimeSlots.push({ activity_id: activity.id, start_time, end_time });
    sortedTimeSlots.sort(
      (a, b) => getTimeValue(a.start_time) - getTimeValue(b.start_time)
    );

    console.log('filteredimeSlots', sortedTimeSlots);
    sortedTimeSlots.forEach((timeslot, index, arr) => {
      if (
        index < arr.length - 1 &&
        getTimeValue(timeslot.end_time) >
          getTimeValue(arr[index + 1].start_time)
      ) {
        available = false;
      }
    });
    return available;
  };

  function handleEdit(event) {
    event.preventDefault();
    if (activityForm.start_time && !activityForm.end_time) {
      setError({ ...error, status: true, message: 'Please enter an end time' });
      return;
    }
    if (activityForm.end_time && !activityForm.start_time) {
      setError({
        ...error,
        status: true,
        message: 'Please enter a start time',
      });
      return;
    }
    if (
      activityForm.start_time !== '' &&
      activityForm.end_time <= activityForm.start_time
    ) {
      setError({
        ...error,
        status: true,
        message: 'end time should be after start time',
      });
      return;
    }

    if (ifAvailable(activityForm.start_time, activityForm.end_time)) {
      editActivity(itinerary_id, activity.id, activityForm).then(res => {
        if (res.error) {
          console.log('error:', res.error);
          return;
        }
      });
      setEditMode(BASE);
      setError({
        ...error,
        status: false,
        message: '',
      });
    } else {
      setError({
        ...error,
        status: true,
        message:
          'there was a time conflict so we removed the start/end time for your activity',
      });

      editActivity(itinerary_id, activity.id, {
        ...activityForm,
        start_time: '',
        end_time: '',
      }).then(res => {
        if (res.error) {
          console.log('error:', res.error);
          return;
        }
        setActivityForm({ ...activityForm, start_time: '', end_time: '' });
        setEditMode(BASE);
      });
    }
  }

  const tConvert = time => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    let timeArr = [];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours

      for (let i = 0; i < time.length; i++) {
        if (i !== 3) {
          timeArr.push(time[i]);
        }
      }
    }

    return timeArr.join(''); // return adjusted time or original string
  };

  let startTime;
  let endTime;
  let duration;

  if (activity.start_time && activity.end_time) {
    startTime = tConvert(activity.start_time);
    endTime = tConvert(activity.end_time);

    const endDateTime = new Date('1970-01-01T' + activity.end_time + 'Z');
    const startDateTime = new Date('1970-01-01T' + activity.start_time + 'Z');

    if (endDateTime < startDateTime) {
      endDateTime.setDate(endDateTime.getDate() + 1);
    }

    duration = (endDateTime - startDateTime) / 1000 / 60 / 60;
  }

  const cancel = () => {
    setView(DEFAULT);
    setEditMode(BASE);
    history.push(url);
  };

  const removeActivity = activityId => {
    props.deleteActivity(itinerary_id, day_id, activityId).then(res => {
      if (res.error) {
      }
    });
  };

  return (
    <article
      className={
        view === DELETE
          ? 'flex justify-between w-full h-auto p-4 bg-gray-600 shadow-lg rounded-xl bg-opacity-75'
          : 'flex justify-between w-full h-auto p-4 duration-300 transform transition-transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'
      }
    >
      {view === DEFAULT && (
        <div
          className={
            editMode === EDIT
              ? 'flex justify-between w-full'
              : 'flex justify-between w-full space-x-4'
          }
        >
          <div
            className={
              editMode === EDIT
                ? 'hidden'
                : 'flex items-center justify-around space-x-4 w-min whitespace-nowrap'
            }
          >
            {duration && (
              <>
                <div className='flex flex-col items-center justify-between w-12 py-1.5 h-full'>
                  <p className='text-xs'>{startTime}</p>
                  {duration &&
                    (duration < 1 ? (
                      <p className='text-xs'>{duration * 60} MIN</p>
                    ) : (
                      <p className='text-xs font-bold'>
                        {duration.toFixed(2)} HR
                      </p>
                    ))}
                  <p className='text-xs'>{endTime}</p>
                </div>
                <div className='w-0.5 h-full bg-gray-600 rounded-xl'></div>
              </>
            )}
            <figure className='hidden w-48 h-full xl:block aspect-w-3 aspect-w-2'>
              <img
                src={activity.image}
                alt='activity'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
          </div>
          <form
            action=''
            className={editMode === EDIT ? 'flex w-full flex-col' : 'hidden'}
            onSubmit={event => event.preventDefault()}
          >
            <div className='flex flex-col md:flex-row'>
              <div className='flex flex-col'>
                <label htmlFor='start-time' className='font-semibold'>
                  Start Time
                </label>
                <input
                  name='start-time'
                  value={activityForm.start_time || ''}
                  type='time'
                  onChange={event =>
                    setActivityForm({
                      ...activityForm,
                      start_time: event.target.value,
                    })
                  }
                  className='mb-2 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                ></input>
                <label htmlFor='end-time' className='font-semibold'>
                  End Time
                </label>
                <input
                  name='end-time'
                  value={activityForm.end_time || ''}
                  type='time'
                  onChange={event =>
                    setActivityForm({
                      ...activityForm,
                      end_time: event.target.value,
                    })
                  }
                  className='mb-2 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                ></input>
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor='notes' className='font-semibold md:ml-2'>
                  Notes:
                </label>
                <textarea
                  name='notes'
                  type='textarea'
                  value={activityForm.notes || ''}
                  onChange={event =>
                    setActivityForm({
                      ...activityForm,
                      notes: event.target.value,
                    })
                  }
                  className='h-full mb-2 border-gray-300 rounded-md appearance-none resize-none md:ml-2 focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
                ></textarea>
              </div>
            </div>
            <div className='flex pt-2 space-x-2'>
              <button
                type='submit'
                onClick={cancel}
                className='w-full px-4 py-3 font-semibold leading-none text-gray-200 bg-teal-600 border-2 border-transparent sm:w-1/4 lg:w-32 hover:text-teal-600 rounded-xl hover:border-teal-600 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
              >
                Save
              </button>
              <button
                type='button'
                onClick={cancel}
                className='hover:underline hover:text-teal-600 focus:outline-none'
              >
                Cancel
              </button>
            </div>
          </form>
          <div
            className={
              editMode === EDIT ? 'hidden' : 'flex flex-col w-full space-y-1'
            }
          >
            <h4 className='text-2xl font-bold'>{activity.name}</h4>
            <p className='px-2 py-1 text-sm font-bold text-gray-100 bg-teal-600 border-l-4 border-gray-700 shadow-md whitespace-wrap lg:w-min rounded-r-xl lg:whitespace-nowrap'>
              {activity.address}
            </p>
            <p className='text-sm line-clamp-3'>
              Description: {activity.description}
            </p>
            <p className='text-sm line-clamp-3'>
              {activity.notes && `Notes: ${activity.notes}`}
            </p>
          </div>
          {url.includes('edit') && (
            <div
              className={
                editMode === EDIT ? 'hidden' : 'flex items-center space-x-3'
              }
            >
              <button
                type='button'
                className='h-5'
                onClick={() => setEditMode(EDIT)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                  <path
                    fillRule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <button
                type='button'
                onClick={() => setView(DELETE)}
                className='h-5'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 duration-200 transform fill-current hover:text-red-600 hover:scale-125'
                >
                  <path
                    fillRule='evenodd'
                    d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
      {view === DELETE && (
        <DeleteConfirmation
          removeItem={() => removeActivity(activity.id)}
          setView={setView}
          DEFAULT={DEFAULT}
          title={'Delete Activity'}
          message={'Are you sure you want to delete this activity?'}
        ></DeleteConfirmation>
      )}
    </article>
  );
}
