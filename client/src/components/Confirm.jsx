export default function Confirm(props) {
  return (
    <div
      className={
        props.show
          ? 'fixed z-50 flex flex-col justify-center p-4 -ml-16 text-gray-600 border border-gray-600 shadow-xl bg-gray-50 w-96 h-min rounded-xl top-1/4 left-1/2'
          : 'hidden'
      }
    >
      <h4 className='text-xl font-bold'>Delete Day</h4>
      <p className=''>
        Are you sure you want to delete this day? All of the activities planned
        for this day will be lost.
      </p>
      <div className='flex justify-end mt-2 space-x-3'>
        <button
          onClick={() => props.showConfirm(false)}
          className='p-2 font-semibold leading-none text-teal-600 transition duration-300 transform bg-transparent border-2 border-teal-600 rounded-lg focus:ring-1 focus:ring-red-600 hover:scale-110'
        >
          Cancel
        </button>
        <button
          onClick={() => {
            props.delete();
            props.showConfirm(prev => {
              return {
                ...prev,
                isDisplayed: false,
                dayToDelet: null,
              };
            });
          }}
          className='p-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-red-600 border-2 border-transparent rounded-lg bg-opacity-90 focus:ring-1 focus:ring-red-600 hover:scale-110'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
