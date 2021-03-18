export default function MyLocationsItem(props) {
  const { location } = props;

  return (
    <div className='flex flex-col w-full mt-4 bg-gray-200 rounded-xl'>
      <div className='w-full xl:block'>
        <div className='p-4 divide-y divide-gray-600 divide-opacity-50'>
          <div className='items-center pb-2 text-gray-600'>
            <h5 className='text-lg font-bold leading-tight'>Location: </h5>
            <span className='leading-tight'>{location.name}</span>
          </div>
          <div className='items-center pt-2 text-gray-600'>
            <h5 className='text-lg font-bold leading-tight'>Description: </h5>
            <p className='leading-tight'>{location.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
