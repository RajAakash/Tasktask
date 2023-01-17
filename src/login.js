import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form action="">
      <div className="input-1">
        <label htmlFor="email"> Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="email"
          autoComplete="off"
        ></input>
      </div>

      <div className="input-1">
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="password"
          autoComplete="off"
        ></input>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
