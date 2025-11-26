import axios from "axios";
import React, { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { AUTHCONTEXTAPI } from "./AuthContext";

export let USERCONTEXTAPI = createContext();
const UserContext = ({ children }) => {
  let { isAuth, getAllUsersFromDb, setIsAuth } = useContext(AUTHCONTEXTAPI);
  // ? Update Profile Picture

  let updateProfilePicture = async (payload) => {
    try {
      let data = await axios.patch(
        `http://localhost:5000/users/${isAuth?.id}`,
        payload
      );
      getAllUsersFromDb();
    } catch (error) {
      toast.error(error.message);
    }
  };

  let handleUpdateUserdetails = async (payload) => {
    try {
      let data = await axios.patch(
        `http://localhost:5000/users/${isAuth?.id}`,
        payload
      );
      toast.success("Details Uploaded Successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  let handleDeleteAccount = async (id) => {
    try {
      let data = await axios.delete(`http://localhost:5000/users/${id}`);
       setIsAuth(null);
       window.localStorage.clear();
      
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  return (
    <USERCONTEXTAPI.Provider
      value={{
        updateProfilePicture,
        handleUpdateUserdetails,
        handleDeleteAccount,
      }}
    >
      {children}
    </USERCONTEXTAPI.Provider>
  );
};

export default UserContext;
