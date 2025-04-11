import { Dialog, styled, Box, Typography } from "@mui/material";

import LogOutIcon from "../../../../assets/svgs/LogOutIcon";
import TimesIcon from "../../../../assets/svgs/TimesIcon";
import CustomBlueButton from "../../../CustomBlueButton";

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

let IconCircle = styled(Box)(() => {
  return {
    width: "52px",
    height: "52px",
    borderRadius: "50%",
    backgroundColor: "#D24339",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

let ContentBox = styled(Box)(() => {
  return {
    width: "412px",
    boxSizing: "border-box",
    padding: "10px",
    height: "364px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };
});

let AreYouSureBox = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "349px",
    height: "54px",
    gap: "10px",
  };
});

let LogOutText = styled(Typography)(() => {
  return {
    fontWeight: 600,
    fontSize: "20px",
    color: "#1A1C1F",
  };
});

let BtnBox = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "349px",
    height: "autoa",
    gap: "10px",
  };
});

export default function LogoutComp({ isModalOpen, setModalState }) {
  function onModalClose() {
    setModalState(false);
  }

  return (
    <Dialog
      open={isModalOpen}
      onClose={onModalClose}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            maxWidth: "unset",
            boxSizing: "content-box",
            padding: 0,
            overflow: "visible",
          },
        },
      }}
    >
      <BackIconWrapper onClick={onModalClose}>
        <TimesIcon
          style={{ width: "7.2px", height: "7.2px", color: "#6C7884" }}
        />
      </BackIconWrapper>
      <ContentBox>
        <IconCircle>
          <LogOutIcon
            style={{ width: "24px", height: "24px", color: "#FFFFFF" }}
          />
        </IconCircle>
        <AreYouSureBox>
          <LogOutText>Log out</LogOutText>
          <Typography
            variant="p"
            sx={{ fontSize: "14px", fontWeight: 400, color: "#50555E" }}
          >
            Are you sure you want to log out?
          </Typography>
        </AreYouSureBox>
        <BtnBox>
          <CustomBlueButton
            width={"344px"}
            height={"48px"}
            sx={{ backgroundColor: "#D24339", borderRadius: "4px" }}
          >
            Yes, logout
          </CustomBlueButton>
          <CustomBlueButton
            width={"344px"}
            height={"48px"}
            sx={{
              backgroundColor: "transparent",
              borderRadius: "4px",
              color: "#2D75B6",
              border: "1px solid #2D75B6",
            }}
          >
            No, cancle
          </CustomBlueButton>
        </BtnBox>
      </ContentBox>
    </Dialog>
  );
}
