import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import MYROUTES from "./Routes/myRoutes";
import AuthContext from "./Context/AuthContext";



createRoot(document.getElementById("root")).render(
   <AuthContext>
    <RouterProvider router={MYROUTES}>
     <App/>
     </RouterProvider>
   </AuthContext>
);