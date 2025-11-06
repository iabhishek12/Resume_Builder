import axios from "axios";
import React, { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { AUTHCONTEXTAPI } from "./AuthContext";

export let USERCONTEXTAPI = createContext();
const UserContext = ({ children }) => {
  let { isAuth } = useContext(AUTHCONTEXTAPI);
  // ? Update Profile Picture

  let updateProfilePicture = async (payload) => {
    try {
    
      let data = await axios.patch(
        `http://localhost:5000/users/${isAuth?.id}`,
        payload
      );

      toast.success("Picture Updated Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <USERCONTEXTAPI.Provider value={{ updateProfilePicture }}>
      {children}
    </USERCONTEXTAPI.Provider>
  );
};

export default UserContext;
