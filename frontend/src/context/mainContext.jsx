import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {URL} from "../url"


const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {

 
const [user,setUser] = useState(null)
useEffect(() => {
  getUser()
},[])
const getUser = async () => {
  try {
      const res = await axios.get(URL + "/api/auth/refetch", {withCredentials : true})
      setUser(res.data)
  } catch (error) {
      console.log("errror while fetching the refetch api", error)
  }
}
  const context = {
    user,
    setUser
  };
  return (
    <ToDoContext.Provider value={context}>{children}</ToDoContext.Provider>
  );
};

export default ToDoContext;