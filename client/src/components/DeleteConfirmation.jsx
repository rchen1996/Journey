export default function DeleteConfirmation(props) {
  return (
    <div className='flex flex-col px-2 text-gray-100 bg-opacity-90 rounded-xl'>
      <h4 className='text-lg font-bold '>{props.title}</h4>
      <p className=''>{props.message}</p>
      <div className='flex pt-2 space-x-3'>
        <button
          type='button'
          onClick={() => props.setView(props.DEFAULT)}
          className='p-2 font-semibold leading-none text-gray-100 transition duration-300 transform bg-transparent border border-gray-100 rounded-lg focus:ring-1 focus:ring-red-600 hover:scale-110'
        >
          Cancel
        </button>
        <button
          type='button'
          onClick={props.removeItem}
          className='px-2 py-2 font-semibold leading-none text-gray-200 transition duration-300 transform bg-red-600 border-2 border-transparent rounded-md bg-opacity-80 focus:ring-1 focus:ring-red-600 hover:scale-110'
        >
          Delete
        </button>
      </div>
    </div>
  );
}
