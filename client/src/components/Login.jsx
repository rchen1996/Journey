import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div className='flex flex-col items-center w-full h-full pt-16'>
      <div className='flex flex-col w-5/6 py-20 md:w-1/2'>
        <h1 className='mb-4 ml-1 text-2xl font-bold'>Welcome Back!</h1>

        <LoginForm onSave={props.onSave} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
