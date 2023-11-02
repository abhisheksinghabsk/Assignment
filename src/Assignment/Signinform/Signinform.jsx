import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    let options = {
      Authorization: "Bearer" + { token },
      method: "POST",
      body: JSON.stringify({ password: password, username: email }),
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://dummyjson.com/auth/login", options)
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  return (
    <div>
      <div className="form">
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}
