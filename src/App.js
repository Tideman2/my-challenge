//gh GH "" || @
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from "react-redux";

import store from "./reduxStore/store"; // Import your Redux store
import Login, { loginAction } from "./pages/Login"; 
import Collaborate, {collaborateAction} from "./pages/Collaborate";
import ForgotPassword from "./pages/Forgot-Password";
import ResetPassword from "./pages/Reset-Password/Reset-Password";
import MenuNav from "./pages/MenuNav";
import AuthenticationLayout from "./components/layout/AutenticationLayout";
import { theme } from "./config/theme";



const routes = [
  {
    element: <AuthenticationLayout />,
    children: [
      { path: "/login", element: <Login />, action: loginAction},
      { path: "/collaborate", elemt: <Collaborate />, action: collaborateAction},
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword />},
      { path: "*", element: <Navigate to="/login" replace = {true}/>},
    ],
  },
  {
    path: "/dashBoard",
    element: <MenuNav />,
    children: [
       
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
                                                                                                                                                                                                      