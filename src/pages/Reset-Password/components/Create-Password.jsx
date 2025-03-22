import { Box, styled, Card, Typography, Button } from "@mui/material";
import { Form } from "react-router-dom";
import { useState } from "react";

import InputComponent from "../../../components/InputComponent";

let CreatePasswordCard = styled(Card)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default, // Custom background for all Card components
    boxShadow: `none`,
    width: 344,
    height: `100vh`,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    justifyContent: "center", // Centers horizontally
    alignItems: "center", // Centers vertically
    margin: "0 auto",
  };
});

let TextWrapper = styled(Typography)(() => {
  return {
    width: `100%`,
    fontSize: 13,
  };
});

export default function CreatePassword() {
  let [password, setPassword] = useState("");
  let [passwordError, setPasswordError] = useState(false);
  let [confirmPassword, setConfirmPassword] = useState("");
  let [confirmPasswordError, setConfirmPasswordError] = useState(false);

  function validatePassword() {
    if (password.length <= 7) {
      setPasswordError("password must be more than 7");
    }
    console.log(password);
  }

  function validateConfirmPassword() {
    if (confirmPassword.length <= 7) {
      setConfirmPasswordError("password must be more than 7");
    }
    console.log(password);
  }

  return (
    <CreatePasswordCard>
      <Box width={"100%"}>
        <Typography variant="h1">Set a new password</Typography>
        <TextWrapper>
          Enter a new password to access settlement portal
        </TextWrapper>
      </Box>
      <Box mt={3}>
        <Form>
          <Box
            sx={{
              display: `flex`,
              flexDirection: `column`,
              gap: 2,
            }}
          >
            <InputComponent
              type={"password"}
              label={"password"}
              onChange={(e) => {
                setPasswordError("")
                setPassword(e.target.value);
              }}
              error={passwordError}
              value={password}
              onBlur={validatePassword}
            />
            <InputComponent
              type={"password"}
              label={"confirm password"}
              onChange={(e) => {
                setPasswordError("")
                setConfirmPassword(e.target.value);
              }}
              error={confirmPasswordError}
              value={confirmPassword}
              onBlur={validateConfirmPassword}
            />
          </Box>
        </Form>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: 48,
          borderRadius: 1,
          mt: 3,
          textTransform: `none`,
        }}
      >
        Change password
      </Button>
    </CreatePasswordCard>
  );
}
