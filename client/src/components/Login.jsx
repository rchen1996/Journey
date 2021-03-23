import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div className='flex flex-col items-center w-full h-full pt-16'>
      <div className='flex flex-col items-center w-5/6 py-20 mx-auto md:w-1/2'>
        <LoginForm onSave={props.onSave} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
