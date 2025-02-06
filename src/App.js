import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { Provider } from "react-redux";

import store from "./reduxStore/store"; // Import your Redux store
import Login, { loginAction } from "./pages/Login"; 
import Collaborate, {collaborateAction} from "./pages/Collaborate";
import ForgotPassword from "./pages/Forgot-Password";
import ResetPassword from "./pages/Reset-Password/Reset-Password";
import AuthenticationLayout from "./components/layout/AutenticationLayout";
import DashboardLayout from "./components/layout/DashboardLayout/DashboardLayout";
import { theme } from "./config/theme";
import Transaction from "./pages/Transaction/Transaction";
import ActivityLog from "./pages/Activity-log/ActivityLog";
import Settings from "./pages/Settings/Settings";
import Administration from "./pages/Administration/Administation";
import Businesses from "./pages/Businesses/Businesses";
import Board from "./pages/Board";


const routes = [
  {
    element: <AuthenticationLayout />,
    children: [
      { path: "/login", element: <Login />, action: loginAction},
      { path: "/collaborate", element: <Collaborate />, action: collaborateAction},
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword />},
      { path: "*", element: <Navigate to="/login" replace = {true}/>},
    ],
  },
  {
    path: "/dashBoard",
    element: <DashboardLayout />,
    children: [
       {path: "/dashBoard", element: <Board /> },
       {path: "/dashBoard/transactions", element: <Transaction /> },
       {path: "/dashBoard/businesses", element: <Businesses /> },
       {path: "/dashBoard/administration", element: <Administration /> },
       {path: "/dashBoard/activity-log", element: <ActivityLog /> },
       {path: "/dashBoard/setting", element: <Settings /> },
       { path: "*", element: <Navigate to="/dashBoard" replace = {true}/>},
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
                                                                                                                                                                                                      