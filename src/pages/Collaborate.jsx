import { Form, redirect } from "react-router-dom";
import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  styled,
} from "@mui/material";

import InputComponent from "../components/InputComponent";



let LoginCard = styled(Card)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default, // Custom background for all Card components
    boxShadow: `none`,
    width: 344,
    height: `100vh`,
    display: "flex",
    gap: 1,
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    margin: "0 auto",
  };
});

export default function Collaborate() {
  let [emailError, setEmailError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);
  let [fullNameError, setFullNameError] = useState(false);
  let [email, setEmail] = useState(``);
  let [password, setPassword] = useState("");
  let [fullName, setFullName] = useState("");

  function validateEmail() {
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
      setEmailError(`Input must not be empty`);
    } else if (!emailRegex.test(email)) {
      setEmailError(`Pls input a valid email`);
    }
  }

  function validatePassword() {
    let pass = password;
    console.log(pass);
    if (pass.length === 0) {
      setPasswordError(`Input must not be empty`); //set error if pass is empty
    } else if (pass.length <= 7) {
      setPasswordError(`Password must be more than 7 digits`); // Set error if email is invalid
    }
  }

  function validateFullName() {
    if (fullName.length === 0) {
      setFullNameError("Input must not be empty");
    }
  }

  return (
    <LoginCard>
      <CardContent>
        <Typography
          variant="h1"
          sx={{
            mb: 3,
          }}
        >
          Collaborate
        </Typography>
        <Form method="post">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <InputComponent
              error={fullNameError}
              value={fullName}
              type={`text`}
              label={`Full name`}
              onBlur={validateFullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <InputComponent
              error={emailError}
              value={email}
              type={`text`}
              label={`Email address`}
              onBlur={validateEmail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputComponent
              value={password}
              error={passwordError}
              type={`password`}
              label={`Password`}
              onBlur={validatePassword}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: 3,
              width: `100%`,
              textTransform: `none`,
              height: 48,
            }}
          >
            Collaborate
          </Button>
        </Form>
      </CardContent>
    </LoginCard>
  );
}

export async function collaborateAction({ request }) {
  let formData = await request.formData();
  let enteredEmail = formData.get(`Email address`);
  let enteredPassword = formData.get(`Password`);
  let fullname = formData.get(`Full name`);
  let hasAccount = false;

  // Get user data from localStorage
  let userDatas = localStorage.getItem("userData");
  let users = userDatas ? JSON.parse(userDatas) : [];

  // Check if account exists
  for (let { email, password } of users) {
    if (email === enteredEmail && password === enteredPassword) {
      hasAccount = true;
      break;
    }
  }

  if (hasAccount) {
    alert("Account already exists");
    return redirect("/");
  } else {
    users.push({
      email: enteredEmail,
      password: enteredPassword,
    });

    localStorage.setItem(`userData`, JSON.stringify(users));
    alert(`Account successfully created`);
    return redirect("/");
  }
}
