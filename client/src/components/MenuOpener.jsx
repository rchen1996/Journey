import { useState } from 'react';
export default function MenuOpener(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='fixed z-50 flex flex-col space-y-3 bottom-4 right-4 lg:hidden'>
      <button
        type='button'
        onClick={() => props.updateMenuState(null)}
        className={
          menuOpen
            ? 'flex items-center justify-center w-16 h-16 text-gray-200 bg-gray-600 rounded-full'
            : 'hidden items-center justify-center w-16 h-16 text-gray-200 bg-gray-600 rounded-full'
        }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-10 h-10 transition duration-500 transform opacity-100'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button
        type='button'
        className={
          menuOpen
            ? 'flex items-center justify-center w-16 h-16 text-gray-200 bg-gray-600 rounded-full'
            : 'hidden items-center justify-center w-16 h-16 text-gray-200 bg-gray-600 rounded-full'
        }
        onClick={() => props.updateMenuState(null)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-10 h-10 transition duration-500 transform opacity-100'
        >
          <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
          <path
            fillRule='evenodd'
            d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button
        type='button'
        className='flex items-center justify-center w-16 h-16 text-gray-200 bg-gray-600 rounded-full'
        onClick={() => {
          setMenuOpen(!menuOpen);
          if (props.isMenuOpen) {
            props.updateMenuState(null);
          }
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={
            menuOpen
              ? 'transition duration-500 transform opacity-0 h-0 w-0'
              : 'transition duration-500 transform opacity-100 h-10 w-10'
          }
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
        <svg
          id='X'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className={
            !menuOpen
              ? 'transition duration-500 transform opacity-0 h-0 w-0'
              : 'transition duration-500 transform opacity-100 h-10 w-10'
          }
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
    </div>
  );
}
