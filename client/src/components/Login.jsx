import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col w-3/4 py-20 sm:w-1/2'>
        <h1 className='ml-1 text-2xl font-bold'>Welcome Back!</h1>
        <span className='mt-2 mb-4 ml-1.5 text-xs font-semibold'>
          Don't have an account? Sign up{' '}
          <Link to='/signup' className='text-teal-600 hover:underline'>
            here!
          </Link>
        </span>
        <LoginForm onSave={props.onSave} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
