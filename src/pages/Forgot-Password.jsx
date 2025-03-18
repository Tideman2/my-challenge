import { Card, CardContent, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import { Form, Link } from "react-router-dom";


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

export default function ForgotPassword() {
  let [emailErrorMessage, setEmailErrorMessage] = useState(null);
  let [email, setEmail] = useState(``);

  function validateEmail() {
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length === 0) {
      setEmailErrorMessage(`Input must not be empty`);
    } else if (!emailRegex.test(email)) {
      setEmailErrorMessage(`Pls input a valid email`);
    }
  }

  return (
    <LoginCard>
      <CardContent>
        <Typography
          variant="h1"
          sx={{
            width: `100%`,
          }}
        >
          Forgot your password?
        </Typography>
        <Typography
          sx={{
            width: `100%`,
            fontSize: 13,
            mt: 3,
            mb: 3,
          }}
        >
          Enter your email address and we will send you link to reset your
          password
        </Typography>
        <Form>
          <InputComponent
            type={`text`}
            label={`Email address`}
            error={emailErrorMessage}
            onBlur={validateEmail}
            onChange={(e) => {
              setEmailErrorMessage("")
              setEmail(e.target.value);
            }}
            value={email}
          />
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
            Continue
          </Button>
        </Form>
        <Link to={`/login`} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              display: `block`,
              width: `100%`,
              height: 22,
              fontWeight: 500,
              fontSize: 12,
              color: `black`,
              textAlign: `center`,
              mt: 2,
            }}
          >
            Return to Log in
          </Typography>
        </Link>
      </CardContent>
    </LoginCard>
  );
}
