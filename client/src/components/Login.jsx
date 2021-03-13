import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col w-1/2 py-20">
        <h1 className="mb-4 ml-1 text-2xl font-bold">Welcome Back!</h1>
        <LoginForm onSave={props.onSave} dispatch={props.dispatch} />
      </div>
    </div>
  );
}
