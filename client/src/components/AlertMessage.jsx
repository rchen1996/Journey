export default function AlertMessage(props) {
  return (
    <div className={props.isError ? props.show : props.hide}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='inline-block w-6 h-6 text-gray-100 align-center'
      >
        <path
          fillRule='evenodd'
          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
          clipRule='evenodd'
        />
      </svg>
      <h3 className='inline-block ml-2 text-gray-100 align-center'>
        {props.message}
      </h3>
    </div>
  );
}
