import React, { useState } from "react";
import { profile } from "../api/employes.api";

function Dashboard() {
  const [user, setUser] = useState({ email: "", username: "" });
  const getProfile = async () => {
    const response = await profile();
    setUser(response.data);
  };
  
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div>Dashboard</div>
      <button onClick={() => getProfile()}>Pedir</button>
    </div>
  );
}

export default Dashboard;
