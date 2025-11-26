import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import MYROUTES from "./Routes/myRoutes";
import AuthContext from "./Context/AuthContext";
import UserContext from "./Context/UserContext";
import TemplateContext from "./Context/TemplateContext";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <TemplateContext>
      <UserContext>
        <RouterProvider router={MYROUTES}>
          <App />
        </RouterProvider>
      </UserContext>
    </TemplateContext>
  </AuthContext>
);
