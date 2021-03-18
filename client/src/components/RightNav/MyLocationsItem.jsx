export default function MyLocationsItem(props) {
  const { location } = props;

  console.log(location);

  return (
    <div
      className='z-0 flex flex-col w-full mt-4 rounded-xl module group'
      style={{ backgroundImage: `url(${location.image})` }}
    >
      <div className='w-full transition bg-gray-800 shadow-lg bg-opacity-80 xl:block rounded-xl module-inside group-hover:bg-gray-100'>
        <div className='flex flex-col items-start pl-2 m-4 border-l group-hover:invisible'>
          <span className='font-bold leading-tight'>{location.name}</span>
          <p className='text-sm font-normal leading-tight text-gray-300'>
            {location.description}
          </p>
        </div>
      </div>
    </div>
  );
}
