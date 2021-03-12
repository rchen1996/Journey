import React, { useState } from "react";

export default function RegisterForm(props) {
  const [firstName, setFirstName] = useState(props.first_name || "");
  const [lastName, setLastName] = useState(props.last_name || "");
  const [email, setEmail] = useState(props.email || "");
  const [password, setPassword] = useState(props.password || "");

  const save = function(){
    return props.register(firstName, lastName, email, password)
  }
  return (
    <section>
    <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <input
        className="first-name"
        name="first-name"
        type="text"
        placeholder="Alice"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        className="last-name"
        name="last-name"
        type="text"
        placeholder="Wonderland"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <input
        className="email"
        name="email"
        type="text"
        placeholder="Enter Email:"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="password"
        name="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
    </form>
    <button onClick={save}>Submit</button>
    </section>
  );
}
