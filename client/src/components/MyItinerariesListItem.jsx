import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyItinerariesListItem(props) {
  const {
    name,
    description,
    image,
    creator_id,
    id,
    trip_type,
  } = props.itinerary;

  const [mouseOverState, setMouseOverState] = useState({
    divClass: 'z-10 flex items-center justify-center space-x-8',
    svgClass: 'hidden w-12 h-12 text-gray-100',
    imgClass: 'object-cover rounded-md shadow-lg',
  });

  const DEFAULT = 'DEFAULT';
  const DELETE = 'DELETE';

  const [view, setView] = useState(DEFAULT);

  const handleDelete = () => {
    props.deleteItinerary(id).then(res => {});
  };

  const handleIconShow = isMouseOver => {
    if (isMouseOver) {
      setMouseOverState(() => {
        return {
          divClass:
            'z-10 flex items-center justify-center space-x-8 bg-gray-700 bg-opacity-50',
          svgClass: 'w-12 h-12 text-gray-100',
          imgClass: 'object-cover rounded-md shadow-lg blur',
        };
      });
    } else {
      setMouseOverState(() => {
        return {
          divClass: 'z-10 flex items-center justify-center space-x-8',
          svgClass: 'hidden w-12 h-12 text-gray-100',
          imgClass: 'object-cover rounded-md shadow-lg',
        };
      });
    }
  };

  return (
    <div className='flex flex-col justify-between w-full h-auto p-4 transition duration-500 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
      {view === DEFAULT && (
        <article>
          <figure
            className='mb-0.25 aspect-w-2 aspect-h-1 overflow-hidden rounded-md'
            onMouseEnter={() => handleIconShow(true)}
            onMouseLeave={() => handleIconShow(false)}
          >
            <div className={mouseOverState.divClass}>
              <Link to={`/itineraries/${id}/edit`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className={mouseOverState.svgClass}
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                  <path
                    fillRule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clipRule='evenodd'
                  />
                </svg>
              </Link>
              {creator_id === props.user.id && (
                <button type='button' onClick={() => setView(DELETE)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className={mouseOverState.svgClass}
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              )}
            </div>
            <img
              src={image}
              alt='itinerary cover'
              className={mouseOverState.imgClass}
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
                {`${trip_type.charAt(0).toUpperCase()}${trip_type.slice(1)}`}
              </span>
            </div>
          </div>
          <Link to={`/itineraries/${id}`}>
            <h4 className='mb-1 text-xl font-bold'>{name}</h4>
          </Link>
          <p className='pb-4 text-sm line-clamp-3'>{description}</p>
        </article>
      )}

      {view === DELETE && (
        <div>
          <h4>Are you sure you want to delete this itinerary?</h4>
          <button type='button' onClick={() => setView(DEFAULT)}>
            Cancel
          </button>
          <button type='button' onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
