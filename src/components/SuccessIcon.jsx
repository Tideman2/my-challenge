import { Box, styled, Typography } from "@mui/material";

let StatusBox = styled(Box)(({failure}) => {

  return {
    height: "28px",
    width: failure? "69px": "95px",
    margin: "0px !important",
    padding: "0px !important",
    backgroundColor: failure? "#FEEFF0": "#E9F8F3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "22px",
  };
});

let StatusText = styled(Typography)(({failure}) => {
  return {
    height: "20px",
    margin: "0px !important",
    padding: "0px !important",
    width: failure? "37px": "63px",
    color: failure? "#F25A68": "#25B883",
    fontSize: "12px",
    textTransform: "none",
  };
});

export default function SuccessIcon({toFailure}) {
  return <StatusBox failure={toFailure}>
    <StatusText failure={toFailure}>
     {toFailure? "Failed": "Successul"}
    </StatusText>
  </StatusBox>;
}
