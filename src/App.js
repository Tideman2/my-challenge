//gh GH "" || @
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxStore/store"; // Import your Redux store
import Login, { loginAction } from "./pages/Login";
import Register, { registerAction } from "./pages/Register";
import ResetPassword from "./pages/Reset-Password";
import DashBoard from "./pages/DashBoard";
import AuthenticationPage from "./pages/Auth";

// Define Routes
const routes = [
  {
    path: "/",
    element: <AuthenticationPage />,
    children: [
      { index: true, element: <Login />, action: loginAction},
      { path: "register", element: <Register />, action: registerAction},
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  {
    path: "/dashBoard",
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

