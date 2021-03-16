export default function MenuOpener(props) {
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
        className={
          props.isMenuOpen
            ? 'absolute -m-3 transition duration-500 transform h-10 w-10 opacity-0'
            : 'absolute -m-3 transition duration-500 transform h-10 w-10 opacity-100'
        }
      >
        <path
          fillRule='evenodd'
          d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
          clipRule='evenodd'
        />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className={
          !props.isMenuOpen
            ? 'absolute -m-3 transition duration-500 transform h-10 w-10 opacity-0'
            : 'absolute -m-3 transition duration-500 transform h-10 w-10 opacity-100'
        }
      >
        <path
          fillRule='evenodd'
          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
}
