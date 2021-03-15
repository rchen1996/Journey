import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

export default function Register(props) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col w-5/6 py-20 lg:w-1/2'>
        <h1 className='ml-1 text-2xl font-bold '>Begin Your Journey!</h1>
        <span className='mt-2 mb-4 ml-1.5 text-xs font-semibold'>
          Already have an account? Sign in{' '}
          <Link to='/login' className='text-teal-600 hover:underline'>
            here!
          </Link>
        </span>
        <RegisterForm register={props.register} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
