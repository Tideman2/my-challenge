//gh GH "" || @
import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  FormLabel,
  Box,
  styled,
} from "@mui/material";
import { Link, Form, redirect, useFetcher } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { updateEmail, updatePassword } from "../reduxStore/features/auth";
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
  let [emailError, setEmailError] = useState(false);
  let [emailErrorMessage, setEmailErrorMessage] = useState(``);
  let [passWordErrorMessage, setPasswordErrorMesssage] = useState(``);
  let [passWordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const fetcher = useFetcher();

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
      setEmailError(true); //set error if string is empty
      setEmailErrorMessage(`Input must not be empty`);
      return false; // if it isnt validated
    } else if (!emailRegex.test(email)) {
      setEmailError(true); // Set error if email is invalid
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
      setPasswordError(true); //set error if pass is empty
      setPasswordErrorMesssage(`Input must not be empty`);
      return false; // if it isnt validated
    } else if (pass.length <= 7) {
      setPasswordError(true); // Set error if email is invalid
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
        <Typography variant="h1" sx= {{
          mb: 2
        }}>Log into your account</Typography>
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
                dispatch(updateEmail({ email: e.target.value }));
              }}
            />

            {/* form control for password input */}
            <InputComponent
              type={`password`}
              name="password"
              onChange={(e) => {
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
  let hasAccount = false;

  // Get user data from localStorage
  let userDatas = localStorage.getItem("userData");
  let users = userDatas ? JSON.parse(userDatas) : []; // Ensure it's an array

  console.log(users);

  // Check if user exists
  for (let { email, password } of users) {
    if (email === enteredEmail && password === enteredPassword) {
      hasAccount = true;
      break;
    }
  }

  localStorage.setItem(`userData`, JSON.stringify(users));

  if (hasAccount) {
    alert("Successfully logged in");
    return redirect("/dashboard");
  } else {
    alert(`Account does not exist, create one`);
    return redirect("/collaborate");
  }
}
