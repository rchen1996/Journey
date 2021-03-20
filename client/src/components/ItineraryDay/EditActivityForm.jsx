export default function EditActivityForm(props) {
  const {
    editMode,
    activityForm,
    setActivityForm,
    handleEdit,
    cancel,
    EDIT,
    itinerary,
  } = props;

  let totalDays = [];
  itinerary.locations.forEach(location => {
    location.days.forEach(day => {
      totalDays.push(day.day_order);
    });
  });

  return (
    <form
      action=''
      className={editMode === EDIT ? 'flex w-full flex-col' : 'hidden'}
      onSubmit={event => event.preventDefault()}
    >
      <div className='flex flex-col'>
        <div className='flex flex-col justify-between sm:space-x-4 sm:flex-row'>
          <div className='flex flex-col sm:w-1/2'>
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
          </div>
          <div className='flex flex-col sm:w-1/2'>
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
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='dayOrder' className='ml-1 font-semibold'>
            Move Activity To:
          </label>
          <select
            name='dayOrder'
            value={activityForm.dayOrder}
            onChange={event =>
              setActivityForm({ ...activityForm, dayOrder: event.target.value })
            }
            className={`mb-4 border-gray-300 rounded-md appearance-none last-name focus:ring-teal-600 focus:ring-1 focus:border-teal-600`}
          >
            <option value='none'>My Locations</option>
            {totalDays.map(dayOrder => {
              return (
                <option key={dayOrder} value={dayOrder}>
                  Day {`${dayOrder}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='notes' className='font-semibold'>
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
            className='h-full mb-2 border-gray-300 rounded-md appearance-none resize-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
          ></textarea>
        </div>
      </div>
      <div className='flex pt-2 space-x-2'>
        <button
          type='submit'
          onClick={event => handleEdit(event)}
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
  );
}
