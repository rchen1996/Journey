import Register from './Register';
export default function Home(props) {
  return (
    <div className='w-full h-screen pt-16'>
      <div className='object-cover object-top w-full h-full bg-no-repeat bg-homepage'></div>
      <div className='fixed inset-0 hidden pt-16 lg:ml-44 lg:-mr-60 xl:ml-72 xl:-mr-72 lg:block'>
        {/* <div className='absolute inset-0'>
          <Register hide={true}></Register>
        </div> */}
      </div>
      <div className='absolute inset-0 pt-16'>
        <h1 className='w-full px-8 pt-20 text-6xl font-bold text-gray-100 whitespace-wrap lg:w-5/12'>
          Explore the world
        </h1>
        <div className='w-full'>
          <p className='mt-4 ml-8 text-xl leading-tight text-gray-100 lg:w-1/3'>
            Journey is a group trip planning app, that allows users to create
            itineraries with the other members in their group, in real time.
          </p>
          <p className='w-1/3 mt-4 ml-8 text-xl leading-tight text-gray-100'>
            Pick a location, search for some attractions, and easily add them to
            your itinerary!
          </p>
        </div>
      </div>
    </div>
  );
}
