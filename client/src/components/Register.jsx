import RegisterForm from './RegisterForm';

export default function Register(props) {
  return (
    <div>
      <h1>Begin Your Journey!</h1>
      <RegisterForm register={props.register} dispatch={props.dispatch} />
    </div>
  );
}
