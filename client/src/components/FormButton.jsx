export default function FormButton(props) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
