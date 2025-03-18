import { Box, styled, Typography, Dialog, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { generateApiViewInActive } from "../../../reduxStore/features/business";
import ApiModalViewOne from "./ApiModalViews/ApiModalViewOne";
import ApiModalViewTwo from "./ApiModalViews/ApiModalViewTwo";
import TimesIcon from "../../../assets/svgs/TimesIcon";
let BackIconWrapper = styled(Box)(() => {
    return {
      width: "24px",
      height: "24px",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignSelf: "end",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px",
    };
  });

export default function ApiModal() {
  let dispatch = useDispatch();
  let [isDialogOpen, setDialog] = useState(false);
  let [resetApi, setResetApi] = useState(false);

  useEffect(() => {
    setDialog(true);
  }, []);

  function onDialogClose() {
    setDialog(false);
    dispatch(generateApiViewInActive());
  }

  function handleResetApi() {
    setResetApi(true)
  }

  return (
    <Dialog
      open={isDialogOpen}
      onClose={onDialogClose}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          maxWidth: "unset",
          padding: 0,
        },
      }}
    >
      <BackIconWrapper onClick={onDialogClose}>
        <TimesIcon
          style={{ width: "7.2px", height: "7.2px", color: "#6C7884" }}
        />
      </BackIconWrapper>
      {resetApi ? <ApiModalViewTwo /> : <ApiModalViewOne reetApi={handleResetApi}/>}
    </Dialog>
  );
}
