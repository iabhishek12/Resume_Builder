import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import ContactUs from "../Pages/ContactUs";
import PageNotFound from "../Pages/PageNotFound";
import Login from "../Components/AuthComponents/Login";
import Register from "../Components/AuthComponents/Register";
import ResetPassword from "../Components/AuthComponents/ResetPassword";
import MainUserLayout from "../Components/Layouts/User/MainUserLayout";
import UserProfile from "../Components/Layouts/User/UserProfile";
import UserProfileUpdate from "../Components/Layouts/User/UserProfileUpdate";
import UserProfilePictureUpdate from "../Components/Layouts/User/UserProfilePictureUpdate";
import UserPasswordUpdate from "../Components/Layouts/User/NewPassword";
import UserDeleteAccount from "../Components/Layouts/User/UserDeleteAccount";
import OTPValidation from "../Components/AuthComponents/OTPValidation";

let MYROUTES = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "otp_validation",
        element: <OTPValidation />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/forget_password",
        element: <ResetPassword />,
      },
    ],
  },

  {
    path: "/user_profile",
    element: <MainUserLayout />,
    children: [
      {
        index: true,
        element: <UserProfile />,
      },
      {
        path: "user_profile_update",
        element: <UserProfileUpdate />,
      },
      {
        path: "update_prodile_picture",
        element: <UserProfilePictureUpdate />,
      },
      {
        path: "update_user_password",
        element: <UserPasswordUpdate />,
      },
      {
        path: "delete_user_account",
        element: <UserDeleteAccount />,
      },
    ],
  },
  { path: "*", element: <PageNotFound /> },
]);

export default MYROUTES;
