import React, { useState } from "react";

import loginServices from "../services/login";

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    loginServices.login({
      username,
      userpassword,
    });

    setUser(user);
    setUsername("");
    setPassword("");
  } catch (error) {

    console.error("error");
  }
};

function Login() {
  const [username, setUsername] = useState("");
  const [userpassword, setPassword] = useState("");
  const [user, setUser] = useState(null);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={username}
              placeholder="User"
              onChange={(target) => setUsername(target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              value={userpassword}
              placeholder="Password"
              onChange={(target) => setPassword(target.value)}
            />
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
