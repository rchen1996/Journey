import LoginForm from './LoginForm';

export default function Login(props) {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <LoginForm onSave={props.onSave} />
    </div>
  );
}
