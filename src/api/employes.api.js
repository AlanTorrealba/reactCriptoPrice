import axios from "axios";

export const userRequest = async () =>
  await axios.get("http://localhost:3000/api/user");

export const employeesRequest = async (task) =>
  await axios.post("http://localhost:3000/api/employees", task);

export const login = async (task) =>
  await axios.post("http://localhost:3000/api/login", task, {withCredentials:true});

  export const profile = async (task) =>
  await axios.post("http://localhost:3000/api/profile", task, {withCredentials:true});
