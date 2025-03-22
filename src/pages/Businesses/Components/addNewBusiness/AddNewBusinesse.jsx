import { Box, styled, Typography, Dialog, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import InputComponent from "../../../../components/InputComponent";
import AddNewBusinessDropdown from "./AddNewBusinessDropdown";
import TimesIcon from "../../../../assets/svgs/TimesIcon";
import { moreBusinessViewInActive } from "../../../../reduxStore/features/business";
let ContainerForImputs = styled(Box)(() => {
  return {
    height: "699px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "412px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    padding: "10px",
    boxSizing: "border-box",
  };
});

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

let InputsBox = styled(Box)(() => {
  return {
    width: "344px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
});

export default function AddNewBusinesses() {
  let dispatch = useDispatch();
  let [isDialogOpen, setDialog] = useState(false);

  useEffect(() => {
    setDialog(true);
  }, []);

  function onDialogClose() {
    setDialog(false);
    dispatch(moreBusinessViewInActive());
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
      <ContainerForImputs>
        <Typography
          textAlign={"center"}
          sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
        >
          Add new businesse
        </Typography>
        <InputsBox>
          <InputComponent
            type={"text"}
            label={"Business name"}
            labelColor={"#1A1C1F"}
          />
          <AddNewBusinessDropdown title={"Business category"} />
          <InputComponent
            type={"text"}
            label={"Business address"}
            labelColor={"#1A1C1F"}
          />
          <InputComponent
            type={"text"}
            label={"Contact's name"}
            labelColor={"#1A1C1F"}
          />
          <InputComponent
            type={"text"}
            label={"Contact's email"}
            labelColor={"#1A1C1F"}
          />
          <InputComponent
            type={"text"}
            label={"Contact's phone no"}
            labelColor={"#1A1C1F"}
          />
        </InputsBox>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "344px",
            margin: "none",
            textTransform: `none`,
            height: 48,
          }}
        >
          Add business
        </Button>
      </ContainerForImputs>
    </Dialog>
  );
}
