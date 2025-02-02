//gh GH "" || @
import React from "react";
import { theme } from "./config/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from "react-redux";
import store from "./reduxStore/store"; // Import your Redux store

import Login, { loginAction } from "./pages/Login";
import Register, { registerAction } from "./pages/Register";
import ResetPassword from "./pages/Reset-Password";
import MenuNav from "./pages/MenuNav";
import AuthenticationLayout from "./components/layout/AutenticationLayout";

// Define Routes
const routes = [
  {
    element: <AuthenticationLayout />,
    children: [
      { path: "/me", element: <redirect to="/login" replace = {true}/>},
      { path: "/login", element: <Login />, action: loginAction},
      { path: "/register", element: <Register />, action: registerAction},
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "dashBoard",
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

