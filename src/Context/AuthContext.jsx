import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export let AUTHCONTEXTAPI = createContext();
const AuthContext = ({ children }) => {
  let [allUsers, setAllUsers] = useState([]);
  let [isAuth, setIsAuth] = useState(null);
  let [dataForOtpValidation, setDataForOtpValidation] = useState(null);
  let [genratedOtp, setGenratedOtp] = useState("");

  let getAllUsersFromDb = async () => {
    let { data } = await axios.get("http://localhost:5000/users");
    setAllUsers(data);
  };

  useEffect(() => {
    getAllUsersFromDb();
  }, []);

  useEffect(() => {
    let tokenid = window.localStorage.getItem("USERTOKEN");
    if (tokenid) {
      let myUser = allUsers.find((user) => {
        return user.id == tokenid;
      });

      setIsAuth(myUser);
    }
  }, [allUsers]);

  let signUp = async (payload) => {
    let isUserPresent = allUsers.find((user) => {
      return user.email == payload.email;
    });

    if (!isUserPresent) {
      try {
        let data = await axios.post("http://localhost:5000/users", payload);
        toast.success("Registration successfull");
        return true;
      } catch (error) {
        toast.error(error.message);
        return false;
      }
    } else {
      toast.error("User already Exists");
      return false;
    }
  };

  // ? Login Function

  let login = (payload) => {
    let myUser = allUsers.find((user) => {
      return user.email == payload.email;
    });

    if (!myUser) {
      toast.error("User not found");
      console.log("login not");
      return false;
    }
    if (myUser.password == payload.password) {
      console.log("login fiund");
      toast.success("Logged in successfully");
      setIsAuth(myUser);
      window.localStorage.setItem("USERTOKEN", myUser.id);
    }
  };
  // ? logout

  let logout = () => {
    setIsAuth(null);
    window.localStorage.clear();
    window.location.assign("/");
  };

  // ? Otp genrator

  let genrateOTP = () => {
    return Math.trunc(Math.random() * 8999) + 1000;
  };

  return (
    <AUTHCONTEXTAPI.Provider
      value={{
        signUp,
        login,
        isAuth,
        logout,
        dataForOtpValidation,
        setDataForOtpValidation,
        genrateOTP,
        genratedOtp,
        setGenratedOtp,
        getAllUsersFromDb,
        setIsAuth,
      }}
    >
      {children}
    </AUTHCONTEXTAPI.Provider>
  );
};

export default AuthContext;
