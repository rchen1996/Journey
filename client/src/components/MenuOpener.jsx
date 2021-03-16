import { useState, useEffect } from 'react';

export default function MenuOpener(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 1024) {
        props.updateMenuState(true);
        return;
      } else {
        props.updateMenuState(false);
      }
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <button
      type='button'
      className='fixed z-50 flex items-center justify-center w-16 h-16 text-white bg-gray-600 rounded-full bottom-4 right-4 lg:hidden'
      onClick={() => props.updateMenuState(null)}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='w-8 h-8 transition duration-300 transform'
      >
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
}
