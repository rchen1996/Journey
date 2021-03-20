import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import DeleteConfirmation from '../DeleteConfirmation';
import EditActivityForm from './EditActivityForm';
import AlertMessage from '../AlertMessage';

export default function ItineraryDayActivities(props) {
  const { activity, editActivity, timeSlots, currentDay, itinerary } = props;
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
    show: 'flex p-3 mb-2 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden',
  });

  const [activityForm, setActivityForm] = useState({
    start_time: activity.start_time,
    end_time: activity.end_time,
    notes: activity.notes,
    dayOrder: currentDay.day_order,
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
      activityForm.start_time !== null &&
      activityForm.end_time <= activityForm.start_time
    ) {
      setError({
        ...error,
        status: true,
        message: 'End time should be after start time',
      });
      return;
    }

    let start_time = activityForm.start_time;
    let end_time = activityForm.end_time;
    let notes = activityForm.notes;
    let dayOrder = activityForm.dayOrder;

    if (activityForm.dayOrder !== currentDay.day_order) {
      start_time = null;
      end_time = null;
    }

    let editedActivity = { start_time, end_time, notes, dayOrder };

    if (
      ifAvailable(activityForm.start_time, activityForm.end_time) ||
      activityForm.dayOrder !== currentDay.day_order
    ) {
      editActivity(itinerary_id, activity.id, editedActivity).then(res => {
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
        message: 'There is a time conflict with another activity.',
      });

      // editActivity(itinerary_id, activity.id, {
      //   ...activityForm,
      //   start_time: '',
      //   end_time: '',
      // }).then(res => {
      //   if (res.error) {
      //     console.log('error:', res.error);
      //     return;
      //   }
      //   setActivityForm({ ...activityForm, start_time: '', end_time: '' });
      //   setEditMode(BASE);
      // });
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
    setError({
      ...error,
      status: false,
      message: '',
    });
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
          ? 'flex flex-col justify-between w-full h-auto p-4 bg-gray-600 shadow-lg rounded-xl bg-opacity-75'
          : 'flex flex-col justify-between w-full h-auto p-4 duration-300 transform transition-transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'
      }
    >
      <AlertMessage
        isError={error.status}
        show={error.show}
        hide={error.hide}
        message={error.message}
      ></AlertMessage>
      {view === DEFAULT && (
        <div
          className={
            editMode === EDIT
              ? 'flex justify-between w-full flex-col sm:flex-row'
              : 'flex justify-between w-full sm:space-x-4 flex-col sm:flex-row'
          }
        >
          <div
            className={
              editMode === EDIT
                ? 'hidden'
                : 'flex items-center justify-between sm:justify-around space-x-4 w-full sm:w-min whitespace-nowrap'
            }
          >
            {duration && (
              <>
                <div className='flex sm:flex-col items-center w-full justify-start sm:justify-between space-x-4 sm:space-x-0 sm:w-12 py-1.5 h-full'>
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
                <div className='w-0.5 h-full bg-gray-600 rounded-xl hidden sm:block'></div>
              </>
            )}
            <figure
              className={
                view === EDIT
                  ? 'hidden w-48 h-full md:block aspect-w-3 aspect-w-2'
                  : 'hidden w-48 h-full xl:block aspect-w-3 aspect-w-2'
              }
            >
              <img
                src={
                  activity.image ||
                  'https://images.unsplash.com/photo-1503221043305-f7498f8b7888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2235&q=80'
                }
                alt='activity'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
          </div>
          <EditActivityForm
            editMode={editMode}
            activityForm={activityForm}
            setActivityForm={setActivityForm}
            handleEdit={handleEdit}
            cancel={cancel}
            EDIT={EDIT}
            itinerary={itinerary}
          ></EditActivityForm>
          <div
            className={
              editMode === EDIT ? 'hidden' : 'flex flex-col w-full space-y-1'
            }
          >
            <div className='flex justify-between'>
              <h4 className='text-2xl font-bold text-gray-600'>
                {activity.name}
              </h4>
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
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='flex-shrink-0 w-4 h-4 mr-1 text-gray-600'
              >
                <path
                  fillRule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='ml-1 text-sm text-gray-500'>
                {activity.address}
              </span>
            </div>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='flex-shrink-0 w-4 h-4 mr-1 text-gray-600'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
                  clipRule='evenodd'
                />
              </svg>

              <span className='ml-1 text-sm text-gray-500 line-clamp-4'>
                {activity.description}
              </span>
            </div>
            {activity.notes && (
              <div className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='flex-shrink-0 w-4 h-4 mr-1 text-gray-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  />
                </svg>

                <span className='ml-1 text-sm text-gray-500'>
                  {activity.notes}
                </span>
              </div>
            )}
          </div>
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
