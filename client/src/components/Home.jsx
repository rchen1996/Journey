import ItineraryDayActivities from './ItineraryOverview/ItineraryDayActivities';

export default function Home() {
  return (
    <main className='flex flex-col justify-between w-full min-h-screen pt-16'>
      {/* <div className='flex flex-col items-center justify-center p-8 py-16 overflow-hidden bg-no-repeat shadow-lg lg:space-x-8 lg:flex-row bg-homepage'> */}
      <div className='flex flex-col items-center justify-around p-8 py-16 overflow-hidden shadow-lg lg:px-24 xl:px-28 lg:space-x-8 lg:flex-row bg-gradient-to-b to-teal-600 from-blue-400'>
        <div className='w-full space-y-2 text-gray-200 lg:w-min'>
          <h1 className='text-5xl font-black whitespace-wrap sm:whitespace-nowrap'>
            Go on an adventure.
          </h1>
          {/* <p className='hidden text-xl leading-tight tracking-tight font-regular lg:block'>
            Trips with friends and loved ones is always a memorable experience,
            but coordinating and planning a trip with a group can be a
            frustrating experience.
          </p> */}

          <p className='text-lg font-normal leading-tight tracking-tight lg:text-xl'>
            Journey is a group trip planning app that helps alleviate those
            frustrations by allowing users to create itineraries with other
            members of their group in real time.
          </p>
        </div>
        <div className='w-full mt-6 lg:mt-2 lg:w-2/3 xl:w-1/2 '>
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
      <div className='flex flex-col items-center justify-between p-8 pb-16 space-y-8 lg:pt-16 lg:px-24 xl:px-40'>
        <div className='flex mb-8 md:space-x-8'>
          <article className='flex-col justify-between hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg md:flex rounded-xl hover:scale-105'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform transiton -top-1'
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
              <div className='flex pt-2 pb-1.5 space-x-2 text-gray-200'>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-3.5 h-3.5 mr-1.5 mb-0.5'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                      fill='#e5e7eb'
                    />
                  </svg>
                  <span className='text-xs font-bold'>7 Days</span>
                </div>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-3.5 h-3.5 mr-1.5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-xs font-bold text-gray-200'>
                    Couples
                  </span>
                </div>
              </div>
              <div className='pb-2'>
                <h4 className='text-xl font-bold '>Our Honeymoon</h4>
                <p className='text-sm text-gray-500'>
                  This seven-day experience includes a beautiful ocean-front
                  stay, stops to all the local attractions, and food breaks at
                  the island's best eats.
                </p>
              </div>
            </div>
          </article>
          <article className='flex-col justify-between hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg lg:flex rounded-xl hover:scale-105'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform transiton -top-1'
              >
                <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
              </svg>
              <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
                <div
                  className={'z-10 flex items-center justify-center space-x-8'}
                ></div>
                <img
                  src={
                    'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                  }
                  alt='itinerary cover'
                  className='object-cover rounded-md shadow-lg'
                />
              </figure>
              <div className='flex pt-2 pb-1.5 space-x-2 text-gray-200'>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-3.5 h-3.5 mr-1.5 mb-0.5'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                      fill='#e5e7eb'
                    />
                  </svg>
                  <span className='text-xs font-bold'>9 Days</span>
                </div>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-3.5 h-3.5 mr-1.5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-xs font-bold text-gray-200'>Group</span>
                </div>
              </div>
              <div className='pb-2'>
                <h4 className='text-xl font-bold '>Tour of Japan</h4>
                <p className='text-sm text-gray-500'>
                  Starting in Tokyo, you can explore the incredible city
                  districts. Then move out to the Kansai region and explore the
                  beautiful city of Kyoto. Cap off the journey with the majestic
                  view of Mount Fuji.
                </p>
              </div>
            </div>
          </article>
          <article className='flex flex-col justify-between w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='fixed z-40 w-10 h-10 text-red-600 duration-300 transform transiton -top-1'
              >
                <path d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' />
              </svg>
              <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
                <div
                  className={'z-10 flex items-center justify-center space-x-8'}
                ></div>
                <img
                  src={
                    'https://images.unsplash.com/photo-1534964542054-81ea785bde49?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
                  }
                  alt='itinerary cover'
                  className='object-cover rounded-md shadow-lg'
                />
              </figure>
              <div className='flex pt-2 pb-1.5 space-x-2 text-gray-200'>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-3.5 h-3.5 mr-1.5 mb-0.5'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.1999 0.400024C3.01425 0.400024 2.8362 0.473774 2.70493 0.60505C2.57365 0.736325 2.4999 0.914373 2.4999 1.10002V1.80002H1.7999C1.4286 1.80002 1.0725 1.94752 0.809953 2.21007C0.547402 2.47263 0.399902 2.82872 0.399902 3.20002V10.2C0.399902 10.5713 0.547402 10.9274 0.809953 11.19C1.0725 11.4525 1.4286 11.6 1.7999 11.6H10.1999C10.5712 11.6 10.9273 11.4525 11.1899 11.19C11.4524 10.9274 11.5999 10.5713 11.5999 10.2V3.20002C11.5999 2.82872 11.4524 2.47263 11.1899 2.21007C10.9273 1.94752 10.5712 1.80002 10.1999 1.80002H9.4999V1.10002C9.4999 0.914373 9.42615 0.736325 9.29488 0.60505C9.1636 0.473774 8.98555 0.400024 8.7999 0.400024C8.61425 0.400024 8.4362 0.473774 8.30493 0.60505C8.17365 0.736325 8.0999 0.914373 8.0999 1.10002V1.80002H3.8999V1.10002C3.8999 0.914373 3.82615 0.736325 3.69488 0.60505C3.5636 0.473774 3.38555 0.400024 3.1999 0.400024V0.400024ZM3.1999 3.90002C3.01425 3.90002 2.8362 3.97377 2.70493 4.10505C2.57365 4.23633 2.4999 4.41437 2.4999 4.60002C2.4999 4.78568 2.57365 4.96372 2.70493 5.095C2.8362 5.22627 3.01425 5.30002 3.1999 5.30002H8.7999C8.98555 5.30002 9.1636 5.22627 9.29488 5.095C9.42615 4.96372 9.4999 4.78568 9.4999 4.60002C9.4999 4.41437 9.42615 4.23633 9.29488 4.10505C9.1636 3.97377 8.98555 3.90002 8.7999 3.90002H3.1999Z'
                      fill='#e5e7eb'
                    />
                  </svg>
                  <span className='text-xs font-bold'>12 Days</span>
                </div>
                <div className='flex items-center justify-center px-2 py-1.5 bg-teal-600 shadow-md w-min whitespace-nowrap rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-3.5 h-3.5 mr-1.5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-xs font-bold text-gray-200'>
                    Backpackers
                  </span>
                </div>
              </div>
              <div className='pb-2'>
                <h4 className='text-xl font-bold '>Exploring Europe</h4>
                <p className='text-sm text-gray-500'>
                  Visit London, Paris, and Rome and their iconic sights like Big
                  Ben, the Eiffel Tower, and the Colosseum. You will be amazed
                  by the breath-taking sights of England, France, and Italy.
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className='w-full'>
          <div className='flex-none w-full h-64 transform shadow-lg sm:h-44 bg-gray-50 rounded-2xl rotate-2'></div>
          <div className='flex flex-col justify-center w-full h-64 p-6 -mt-64 space-y-2 text-gray-200 transform shadow-lg bg-gradient-to-l to-teal-600 from-teal-500 sm:h-44 sm:-mt-44 rounded-2xl'>
            <h2 className='flex items-center space-x-2 text-4xl font-black'>
              Get Inspired
            </h2>
            <p className='text-lg font-normal leading-tight tracking-tight lg:text-xl'>
              Check out our list of curated itineraries and browse for
              inspiration. Save them as a bookmark and view them later date.
              There are tons of trips to explore, so sign up today!
            </p>
          </div>
        </div>
      </div>
      <footer className='flex items-center justify-between h-32 p-8 text-gray-200 bg-gray-600 shadow-md'>
        <div className='space-y-2'>
          <h6>Check us out on GitHub</h6>
          <div className='flex justify-between px-2'>
            <a
              href='https://github.com/babs20'
              className='w-12'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github-square'
                className='duration-300 transform w-9 h-9 hover:scale-110'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z'
                ></path>
              </svg>
            </a>
            <a
              href='https://github.com/maycheongs'
              className='w-12'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github-square'
                className='duration-300 transform w-9 h-9 hover:scale-110'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z'
                ></path>
              </svg>
            </a>
            <a
              href='https://github.com/rchen1996'
              className='w-12'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github-square'
                className='duration-300 transform w-9 h-9 hover:scale-110'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z'
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <span className='flex items-center text-xs'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='far'
            data-icon='copyright'
            className='w-3 h-3 mr-1'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 448c-110.532 0-200-89.451-200-200 0-110.531 89.451-200 200-200 110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200zm107.351-101.064c-9.614 9.712-45.53 41.396-104.065 41.396-82.43 0-140.484-61.425-140.484-141.567 0-79.152 60.275-139.401 139.762-139.401 55.531 0 88.738 26.62 97.593 34.779a11.965 11.965 0 0 1 1.936 15.322l-18.155 28.113c-3.841 5.95-11.966 7.282-17.499 2.921-8.595-6.776-31.814-22.538-61.708-22.538-48.303 0-77.916 35.33-77.916 80.082 0 41.589 26.888 83.692 78.277 83.692 32.657 0 56.843-19.039 65.726-27.225 5.27-4.857 13.596-4.039 17.82 1.738l19.865 27.17a11.947 11.947 0 0 1-1.152 15.518z'
            ></path>
          </svg>
          Copyright 2021
        </span>
      </footer>
    </main>
  );
}
