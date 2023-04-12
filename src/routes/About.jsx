import React from "react";
import { userRequest } from "../api/employes.api";
import { useEffect, useState } from "react";

function About() {
  const [users, setUser] = useState([]);

  // const getData = async () => {
  // const res = await userRequest
  // console.log(res.data)
  // setUser(res.data)
  // }
  //  useEffect(()=>{
  //   getData()
  //  }, [])
  useEffect(() => {
    async function loadUser() {
      const response = await userRequest();
      setUser(response.data);
    }
    loadUser();
  }, []);

  return (
    <div>
      {
        users.map( user=>(

          <div key={user.id}>
            <h1>{user.username}</h1>
            <h1>{user.password}</h1>
          </div>

        ))
      }
    </div>
  );
}

export default About;
