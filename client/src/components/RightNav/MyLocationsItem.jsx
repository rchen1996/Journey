export default function MyLocationsItem(props) {
  const { location } = props;

  return (
    <div className='flex flex-col w-full h-full p-4 bg-gray-100 rounded-xl'>
      <div className='xl:block aspect-w-4 aspect-h-3'>
        <img
          src={location.image}
          alt='attraction'
          className='object-cover w-full h-full pb-2 rounded-xl'
        />
      </div>
      <div className=''>
        <h4 className='text-xl font-bold leading-tight text-gray-600'>
          {location.name}
        </h4>
        <p className='text-gray-600'>{location.description}</p>
      </div>
    </div>
  );
}
