import ItineraryDayActivities from './ItineraryOverview/ItineraryDayActivities';
import ItineraryListItem from './ItineraryListItem';

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
          <article className='flex-col hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg md:flex rounded-xl hover:scale-105'>
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
                  'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
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

                <span className='text-xs font-bold text-gray-200'>9 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Group
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Tour of Japan</h4>
            <p className='pb-4 text-sm'>
              Starting in Tokyo, you can explore the incredible city districts.
              Then move out to the Kansai region and explore the beautiful city
              of Kyoto. Cap off the journey with the majestic view of Mount
              Fuji.
            </p>
          </article>
          <article className='flex flex-col w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
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
                  'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
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
            <h4 className='mb-1 text-xl font-bold'>The American Midwest</h4>
            <p className='pb-4 text-sm'>
              Explore the diverse landscape of the American midwest from prairie
              farmland, to the towering Rocky Mountains. Finally, end your
              journey in the depths of the Grand Canyon.
            </p>
          </article>
          <article className='flex-col hidden w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg xl:flex rounded-xl hover:scale-105'>
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
                  'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
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

                <span className='text-xs font-bold text-gray-200'>12 Days</span>
              </div>
              <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-2xl my-2 shadow-md'>
                <span className='text-xs font-bold text-gray-200 pl-0.5'>
                  Couples
                </span>
              </div>
            </div>
            <h4 className='mb-1 text-xl font-bold'>Exploring Europe</h4>
            <p className='pb-4 text-sm'>
              Visit London, Paris, and Rome and their iconic sights like Big
              Ben, the Eiffel Tower, and the Colosseum. You will be amazed by
              the breath-taking sights of England, France, and Italy.
            </p>
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
          <h6>Follow us on social media</h6>
          <div className='flex justify-between px-2'>
            <svg
              aria-hidden='true'
              focusable='false'
              dataprefix='fab'
              dataicon='instagram'
              className='w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-100'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
              fill='currentColor'
            >
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
            </svg>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='twitter'
              className='w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-100'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              fill='currentColor'
            >
              <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
            </svg>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='facebook-f'
              className='w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-100'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
              ></path>
            </svg>
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
