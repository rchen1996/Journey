import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex flex-col w-1/2 mt-32'>
        <h1 className='text-2xl font-bold mb-4 ml-1'>Welcome Back!</h1>
        <LoginForm onSave={props.onSave} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
