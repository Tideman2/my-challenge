import { Box, Typography, styled, TextField, Button } from "@mui/material";
import { useState } from "react";

import NoticeIcon from "../../../../assets/svgs/NoticeIcon";
import CustomBlueButton from "../../../../components/CustomBlueButton";
import InputComponent from "../../../../components/InputComponent";
let ContentContainer = styled(Box)(() => {
  return {
    width: "412px",
    height: "571px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };
});

let NoticeBox = styled(Box)(() => {
  return {
    width: "344px",
    height: "65px",
    border: "1px solid #EBEDEF",
    backgroundColor: "#F9FAFA",
    display: "flex",
    borderRadius: "3px",
    justifyContent: "center",
    alignItems: "center",
  };
});

let TextFieldBox = styled(Box)(() => {
  return {
    width: "344px",
    height: "109px",
  };
});

let CustomTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    height: "78px",
    border: "1px solid #EBEDEF",
    borderRadius: "4px",
    padding: "0 10px",
    "& fieldset": {
      border: "none",
    },
  },
}));

export default function ApiModalViewTwo() {
  let [password, setPassword] = useState("");
  let [erroMessage, setErrorMessage] = useState("");

  function handlePasswordChange(event) {
    setPassword((prev) => {
      let newData = event.target.value;
      return newData;
    });
    setErrorMessage("");
  }

  //  Password validation function
  function validatePassword() {
    let pass = password;
    console.log(pass);
    if (pass.length === 0) {
      setErrorMessage(`Input must not be empty`);
      return false; // if it isnt validated
    } else if (pass.length <= 7) {
      setErrorMessage(`Password must be more than 7 digits`);
      return false; // if it isnt validated
    }
    return true; // if it reaches here then it is validated
  }

  return (
    <ContentContainer>
      <Typography
        sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
      >
        Reset API Key
      </Typography>
      <NoticeBox>
        <Box display={"flex"}>
          <NoticeIcon style={{ color: "white", marginRight: "10px" }} />
          <Typography
            sx={{
              width: "292px",
              height: "42px",
              color: "#23203D",
              fontSize: "12px",
            }}
          >
            This action will deactivate your current API key and immediately
            generate a new one.
          </Typography>
        </Box>
      </NoticeBox>
      <TextFieldBox>
        <Typography
          sx={{
            width: "fit-content",
            height: "28px",
            color: "#23203D",
            fontSize: "14px",
          }}
        >
          Why do you want to reset your API key?
        </Typography>
        <CustomTextField />
      </TextFieldBox>
      <Box>
        <InputComponent
          type={"password"}
          label={"Enter password to confirm this action"}
          labelColor={"#1A1C1F"}
          onBlur={validatePassword}
          onChange={handlePasswordChange}
          value={password ?? ""}
          error={erroMessage}
        />
      </Box>
      <CustomBlueButton width={"344px"} height={"48px"}>
        Reset Api Key
      </CustomBlueButton>
    </ContentContainer>
  );
}
