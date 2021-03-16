export default function Confirm(props) {
  return (
    <div className='fixed z-50 flex flex-col justify-center w-64 p-4 space-y-4 text-gray-200 bg-gray-600 shadow-md h-min rounded-xl top-1/4 left-1/2'>
      <h4 className='text-xl font-bold'>{props.message}</h4>
      <div className='flex justify-center space-x-8'>
        <button className='p-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-red-600 border-2 border-transparent rounded-lg bg-opacity-90 focus:ring-1 focus:ring-red-600 hover:scale-110'>
          Delete
        </button>
        <button className='p-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-teal-600 border-2 border-transparent rounded-lg focus:ring-1 focus:ring-red-600 hover:scale-110'>
          Cancel
        </button>
      </div>
    </div>
  );
}
