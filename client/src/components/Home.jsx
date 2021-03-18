import ItineraryDayActivities from './ItineraryOverview/ItineraryDayActivities';
import ItineraryListItem from './ItineraryListItem';

export default function Home() {
  return (
    <main className='flex flex-col justify-between w-full min-h-screen pt-16'>
      {/* <svg viewBox='0 0 500 500' preserveAspectRatio='xMinYMin meet'>
        <path
          d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z'
          style={{ stroke: 'none', fill: 'red' }}
          className='absolute inset-0'
        ></path>
      </svg> */}
      <div className='flex flex-col items-center justify-center p-8 py-16 overflow-hidden shadow-lg lg:space-x-8 lg:flex-row bg-gradient-to-b to-teal-600 from-blue-400'>
        <div className='w-full space-y-2 text-gray-200 lg:w-3/5'>
          <h1 className='text-5xl font-black'>Go on an adventure.</h1>
          <p className='hidden text-xl font-light leading-snug lg:block'>
            Trips with friends and loved ones is always a memorable experience,
            but coordinating and planning a trip with a group can be a
            frustrating experience.
          </p>

          <p className='text-xl font-light leading-snug lg:text-xl'>
            Journey is a group trip planning app that helps alleviate those
            frustrations by allowing users to create itineraries with other
            members of their group in real time.
          </p>
        </div>
        <div className='w-full mt-6 lg:mt-2 lg:w-2/3'>
          <article className='mb-6 bg-gray-100 divide-y divide-gray-600 shadow-lg divide-opacity-25 rounded-xl last:mb-0'>
            <div
              className={
                'flex items-center justify-between px-4 pt-4 pb-2 rounded-xl'
              }
            >
              <div
                className={
                  'mb-2 text-lg font-bold text-gray-100 w-min whitespace-nowrap space-x-2'
                }
              >
                <span className='bg-teal-600 shadow-md px-4 py-1.5 rounded-xl'>
                  Day 1
                </span>
                <span className='font-medium text-gray-600'>
                  {new Date().toDateString().substring(0, 10)}
                </span>
              </div>
            </div>
            <ItineraryDayActivities
              activity={{
                name: 'Visit the Eiffel Tower',
                address:
                  'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France',
                start_time: '12:00:00',
                end_time: '15:00:00',
              }}
            ></ItineraryDayActivities>
          </article>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between p-8 pb-16 space-y-8 lg:pt-16'>
        <div className='flex mb-8 md:space-x-8'>
          <article className='flex-col hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg md:flex rounded-xl hover:scale-105'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform shadow-xl transiton -top-1'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
            <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
              <div
                className={'z-10 flex items-center justify-center space-x-8'}
              ></div>
              <img
                src={
                  'https://images.unsplash.com/photo-1580798966872-8b1414293e55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                }
                alt='itinerary cover'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
            <div className='flex space-x-2'>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 text-gray-200'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                    fill='#e5e7eb'
                  />
                </svg>

                <span className='text-xs font-bold text-gray-200'>7 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Couples
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Our Honeymoon</h4>
            <p className='pb-4 text-sm'>
              This seven-day experience includes a beautiful ocean-front stay,
              stops to all the local attractions, and food breaks at the
              island's best eats.
            </p>
          </article>
          <article className='flex-col hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg lg:flex rounded-xl hover:scale-105'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform shadow-xl transiton -top-1'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
            <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
              <div
                className={'z-10 flex items-center justify-center space-x-8'}
              ></div>
              <img
                src={
                  'https://images.unsplash.com/photo-1580798966872-8b1414293e55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                }
                alt='itinerary cover'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
            <div className='flex space-x-2'>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 text-gray-200'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                    fill='#e5e7eb'
                  />
                </svg>

                <span className='text-xs font-bold text-gray-200'>7 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Couples
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Our Honeymoon</h4>
            <p className='pb-4 text-sm'>
              This seven-day experience includes a beautiful ocean-front stay,
              stops to all the local attractions, and food breaks at the
              island's best eats.
            </p>
          </article>
          <article className='flex flex-col w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform shadow-xl transiton -top-1'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
            <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
              <div
                className={'z-10 flex items-center justify-center space-x-8'}
              ></div>
              <img
                src={
                  'https://images.unsplash.com/photo-1580798966872-8b1414293e55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                }
                alt='itinerary cover'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
            <div className='flex space-x-2'>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 text-gray-200'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                    fill='#e5e7eb'
                  />
                </svg>

                <span className='text-xs font-bold text-gray-200'>7 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Couples
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Our Honeymoon</h4>
            <p className='pb-4 text-sm'>
              This seven-day experience includes a beautiful ocean-front stay,
              stops to all the local attractions, and food breaks at the
              island's best eats.
            </p>
          </article>
          <article className='flex-col hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg xl:flex rounded-xl hover:scale-105'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform shadow-xl transiton -top-1'
            >
              <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
            </svg>
            <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
              <div
                className={'z-10 flex items-center justify-center space-x-8'}
              ></div>
              <img
                src={
                  'https://images.unsplash.com/photo-1580798966872-8b1414293e55?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
                }
                alt='itinerary cover'
                className='object-cover rounded-md shadow-lg'
              />
            </figure>
            <div className='flex space-x-2'>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 12 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='mr-2 text-gray-200'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                    fill='#e5e7eb'
                  />
                </svg>

                <span className='text-xs font-bold text-gray-200'>7 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Couples
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Our Honeymoon</h4>
            <p className='pb-4 text-sm'>
              This seven-day experience includes a beautiful ocean-front stay,
              stops to all the local attractions, and food breaks at the
              island's best eats.
            </p>
          </article>
        </div>
        <div className='w-full'>
          <div className='flex-none w-full h-64 transform shadow-lg sm:h-44 bg-gray-50 rounded-2xl rotate-3'></div>
          <div className='flex flex-col justify-center w-full h-64 p-6 -mt-64 space-y-2 text-gray-200 transform bg-teal-600 shadow-lg sm:h-44 sm:-mt-44 rounded-2xl'>
            <h2 className='flex items-center space-x-2 text-4xl font-black'>
              {/* <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='z-50 w-12 h-12 mr-2'
              >
                <path d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' />
              </svg> */}
              Get Inspired
            </h2>
            <p className='text-xl font-light leading-snug'>
              Check out our list of curated itineraries and browse for
              inspiration. Save them as a bookmark and view them later date.
              There are tons of trips to explore, so sign up today!
            </p>
          </div>
        </div>
      </div>
      <footer className='h-32 text-gray-200 bg-gray-600'>PAIN</footer>
    </main>
  );
}
