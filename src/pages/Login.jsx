//gh GH "" || @
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { Link, Form, redirect, useFetcher } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../reduxStore/store";

import { updateEmail, updatePassword } from "../reduxStore/features/auth";
import { autenticate } from "../reduxStore/features/auth";
import InputComponent from "../components/InputComponent";

let LoginCard = styled(Card)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default, // Custom background for all Card components
    boxShadow: `none`,
    width: 344,
    height: `100vh`,
    display: "flex",
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    margin: "0 auto",
  };
});

export default function Login() {
  let [emailErrorMessage, setEmailErrorMessage] = useState(``);
  let [passWordErrorMessage, setPasswordErrorMesssage] = useState(``);
  const dispatch = useDispatch();
  const fetcher = useFetcher();
  const adminData = useSelector((state) => state.adminState);
  useEffect(() => {
    // Get user data from localStorage
    let userDatas = localStorage.getItem("userData");
    let users = userDatas ? JSON.parse(userDatas) : [];
    function initAdminInLocal() {
      let adminUser = {
        name: "admin",
        ...adminData,
      };
      users.push(adminUser);
      console.log(users);
      localStorage.setItem("userData", JSON.stringify(users));
    }

    //check if there is any user
    if (users.length > 0) {
      let thereIsAdmin = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].name === "admin") {
          thereIsAdmin = true;
          break;
        }
      }
      //check if admin is not there
      if (!thereIsAdmin) {
        initAdminInLocal();
      }
    } else {
      initAdminInLocal();
    }
  }, [adminData]);

  //user email from redux store
  let userEmail = useSelector((state) => {
    return state.auth.user.email;
  });

  //user password from redux store
  let userPassword = useSelector((state) => {
    return state.auth.user.password;
  });

  // Email validation function
  function validateEmail() {
    let email = userEmail;
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
      setEmailErrorMessage(`Input must not be empty`);
      return false; // if it isnt validated
    } else if (!emailRegex.test(email)) {
      setEmailErrorMessage(`Pls input a valid email`);
      return false; //if it isnt validated
    }
    return true; // if it reaches here then it is validated
  }

  //  Password validation function
  function validatePassword() {
    let pass = userPassword;
    console.log(pass);
    if (pass.length === 0) {
      setPasswordErrorMesssage(`Input must not be empty`);
      return false; // if it isnt validated
    } else if (pass.length <= 7) {
      setPasswordErrorMesssage(`Password must be more than 7 digits`);
      return false; // if it isnt validated
    }
    return true; // if it reaches here then it is validated
  }

  //Form submit function
  function handleSubmit(event) {
    event.preventDefault();

    if (validateEmail() && validatePassword()) {
      const formData = new FormData(event.target);
      fetcher.submit(formData, { method: `post`, action: `/login` });
      alert(`form successfully submitted`);
    } else {
      alert(`form submission failed`);
    }
  }

  return (
    <LoginCard>
      <CardContent>
        <Typography
          variant="h1"
          sx={{
            mb: 2,
          }}
        >
          Log into your account
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `column`,
              gap: 2,
            }}
          >
            {/* form control for email input */}
            <InputComponent
              label={`Email address`}
              onBlur={validateEmail}
              value={userEmail ?? ``}
              name="email"
              error={emailErrorMessage}
              onChange={(e) => {
                setEmailErrorMessage("");
                dispatch(updateEmail({ email: e.target.value }));
              }}
            />

            {/* form control for password input */}
            <InputComponent
              type={`password`}
              name="password"
              onChange={(e) => {
                setPasswordErrorMesssage("");
                dispatch(updatePassword({ password: e.target.value }));
              }}
              label={`Password`}
              onBlur={validatePassword}
              value={userPassword ?? ``}
              error={passWordErrorMessage}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                textTransform: `none`,
                height: 48,
              }}
            >
              Log in
            </Button>
          </Box>
        </Form>

        <Box
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            marginTop: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 12,
              height: 22,
              marginRight: 1,
            }}
          >
            Forgot your password?
          </Typography>
          <Link to={`/forgot-password`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                height: 22,
                fontWeight: 400,
                fontSize: 12,
                color: `black`,
              }}
            >
              Reset it here
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </LoginCard>
  );
}

//route action to simulate user login
export async function loginAction({ request }) {
  let formData = await request.formData();
  let enteredEmail = formData.get("email");
  let enteredPassword = formData.get("password");
  console.log(enteredEmail, enteredPassword);
  let nameOfLoggedInUser = null;
  let hasAccount = false;

  // Get user data from localStorage
  let userDatas = localStorage.getItem("userData");
  let users = userDatas ? JSON.parse(userDatas) : []; // Ensure it's an array

  // Check if user exists
  for (let { emailAddress, password, name } of users) {
    if (
      emailAddress.trim().toLowerCase() === enteredEmail.trim().toLowerCase() &&
      password === enteredPassword
    ) {
      hasAccount = true;
      nameOfLoggedInUser = name;
      //We useb redux imported store here to set the isAutenticated to true
      console.log(store.dispatch(autenticate()));
      console.log(store.getState());
      break;
    }
  }

  localStorage.setItem(`userData`, JSON.stringify(users));

  if (hasAccount) {
    alert(`Successfully logged in as ${nameOfLoggedInUser}`);
    return redirect("/dashboard");
  } else {
    alert(`Account does not exist, you need to be invited`);
    return null;
  }
}
