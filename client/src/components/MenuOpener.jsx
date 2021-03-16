import { useState } from 'react';
export default function MenuOpener(props) {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <button
      type='button'
      className='fixed z-50 flex items-center justify-center w-16 h-16 text-white bg-gray-600 rounded-full bottom-4 right-4 lg:hidden'
      onClick={props.updateMenuState}
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
