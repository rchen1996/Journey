import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Note(props) {
  const { note } = props;

  const url = useLocation().pathname;

  const DELETE = 'DELETE';
  const NOTE = 'NOTE';
  const [deleteView, setDeleteView] = useState(NOTE);

  return (
    <div>
      {deleteView === NOTE && (
        <div className='flex items-center justify-between py-2 space-x-2'>
          <div className='flex items-center space-x-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='flex-shrink-0 w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z'
                clipRule='evenodd'
              />
            </svg>
            <p>{note.note}</p>
          </div>
          {url.includes('edit') && (
            <div className='flex items-center pr-2 space-x-3'>
              <button type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5 duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
                >
                  <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                  <path
                    fillRule='evenodd'
                    d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <button type='button' onClick={() => setDeleteView(DELETE)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='flex-shrink-0 w-5 h-5 duration-200 transform fill-current hover:text-red-600 hover:scale-125'
                >
                  <path
                    fillRule='evenodd'
                    d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
      {deleteView === DELETE && (
        <div>
          <p>Are you sure you want to delete this note?</p>
          <button type='button' onClick={() => setDeleteView(NOTE)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
