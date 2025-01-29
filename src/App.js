//gh GH "" || @
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxStore/store"; // Import your Redux store

import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/Reset-Password";
import DashBoard from "./pages/DashBoard";
import AuthenticationPage from "./pages/Auth";

// Define Routes
const routes = [
  {
    path: "/",
    element: <AuthenticationPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

