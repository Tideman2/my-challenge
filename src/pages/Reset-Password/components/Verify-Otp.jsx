import { Box, styled, Card, Typography, Button } from "@mui/material";
import OTPInput from "react-otp-input";
import { useState } from "react";

import smsIcon from "../../../assets/img/sms-notification.png";

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

let IconWrapper = styled(Box)(() => {
  return {
    width: 43,
    height: 43,
  };
});

let TextWrapper = styled(Typography)(() => {
  return {
    width: `100%`,
    fontSize: 13,
    mt: 3,
    mb: 3,
    textAlign: `center`,
  };
});

let CircleRoundLogo = styled(Box)(() => {
  return {
    width: 101,
    height: 101,
    backgroundColor: `#E8EEF4`,
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    borderRadius: `50%`,
    marginLeft: `auto`,
    marginRight: `auto`,
  };
});

export default function VerifyOtp({setVerified}) {
  let [otp, setOtp] = useState(null);

  return (
    <LoginCard>
      <Box
        sx={{
          display: `flex`,
          flexDirection: `column`,
          gap: 3,
        }}
      >
        <CircleRoundLogo>
          <IconWrapper>
            <img src={smsIcon} alt="sms-icon" width="100%" />
          </IconWrapper>
        </CircleRoundLogo>
        <Typography
          variant="h1"
          sx={{
            textAlign: `center`,
          }}
        >
          Check your email
        </Typography>
        <Box>
          <TextWrapper>We have sent an OTP to your email address</TextWrapper>
          <TextWrapper>Pls enter OTP pin</TextWrapper>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <OTPInput
            numInputs={4}
            value={otp}
            onChange={setOtp}
            renderInput={(inputProps, index) => (
              <input
                {...inputProps} // Spread inputProps (ensures functionality)
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                  borderRadius: "4px",
                  marginRight: "5px",
                  borderColor: "#2D75B6",
                  boxShadow: `none`,
                  // Custom border for input 3
                }}
              />
            )}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            width: 344,
            height: 48,
            borderRadius: 1,
          }}
          onClick={() => {setVerified()}}
        >
          verify
        </Button>

        <Box>
          <Typography
          
            sx={{
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Didn't recieve an OTP yet
          </Typography>
        </Box>
      </Box>
    </LoginCard>
  );
}
