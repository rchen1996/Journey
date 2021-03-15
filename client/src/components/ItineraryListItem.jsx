import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SET_BOOKMARKS } from '../reducers/application';

export default function ItineraryListItem(props) {
  const { name, description, image, id, days } = props.itinerary;

  const [message, setMessage] = useState('');

  const addBookmark = () => {
    if (props.user.id) {
      props.addBookmark(id).then(res => {
        if (res.data.error) {
          setMessage(res.data.error);
        } else {
          props.dispatch({
            type: SET_BOOKMARKS,
            bookmarks: res.data,
          });

          setMessage('Itinerary added to bookmarks!');

          setTimeout(() => {
            setMessage('');
          }, 2000);
        }
      });
    } else {
      setMessage('You must be logged in to bookmark an itinerary');
    }
  };

  return (
    <article className='flex flex-col justify-between w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
      <figure className='mb-0.25 overflow-hidden rounded-md aspect-w-2 aspect-h-1 group'>
        <div className='z-10 flex items-center justify-center space-x-8 hover:bg-gray-700 hover:bg-opacity-90 group'>
          {props.user.id && (
            <div>
              {message && <p>{message}</p>}
              <button type='button' onClick={addBookmark}>
                <svg
                  width='48'
                  height='54'
                  viewBox='0 0 48 54'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hidden w-8 h-8 text-gray-100 duration-300 transform group-hover:inline-block transiton hover:scale-110'
                >
                  <g filter='url(#filter0_dd)'>
                    <path
                      d='M12 9.60005C12 8.32701 12.5057 7.10611 13.4059 6.20594C14.3061 5.30576 15.527 4.80005 16.8 4.80005H31.2C32.473 4.80005 33.6939 5.30576 34.5941 6.20594C35.4943 7.10611 36 8.32701 36 9.60005V43.2L24 37.2L12 43.2V9.60005Z'
                      fill='#F4F4F5'
                    />
                  </g>
                  <defs>
                    <filter
                      id='filter0_dd'
                      x='-6'
                      y='-2'
                      width='60'
                      height='60'
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      />
                      <feOffset dy='4' />
                      <feGaussianBlur stdDeviation='3' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect1_dropShadow'
                      />
                      <feColorMatrix
                        in='SourceAlpha'
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                      />
                      <feOffset dy='2' />
                      <feGaussianBlur stdDeviation='2' />
                      <feColorMatrix
                        type='matrix'
                        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
                      />
                      <feBlend
                        mode='normal'
                        in2='effect1_dropShadow'
                        result='effect2_dropShadow'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect2_dropShadow'
                        result='shape'
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          )}
        </div>
        <img
          src={image}
          alt='itinerary cover'
          className='object-cover rounded-md shadow-lg'
        />
      </figure>
      <Link to={`/itineraries/${id}`}>
        <h4 className='mb-1 text-xl font-bold hover:underline'>{name}</h4>
      </Link>
      <div className='flex items-center justify-center px-2.5 py-2 bg-teal-600 w-min whitespace-nowrap rounded-r-2xl mb-2 shadow-md border-l-4 border-gray-700'>
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

        <span className='text-xs font-bold text-gray-200'>
          {days === '1' ? '1 Day' : `${days} Days`}
        </span>
      </div>
      <p className='pb-4 text-sm'>{description}</p>
    </article>
  );
}
