import RegisterForm from './RegisterForm';

export default function Register(props) {
  return (
    <div className='flex flex-col items-center w-full h-full pt-16'>
      <div className='flex flex-col w-5/6 py-20 lg:w-1/2'>
        <h1 className='mb-4 ml-1 text-2xl font-bold'>Begin Your Journey!</h1>
        <RegisterForm register={props.register} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
