import { Dialog, Select, Menu, styled, Box, Typography } from "@mui/material";
import { useState } from "react";

import TimesIcon from "../../../../assets/svgs/TimesIcon";

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

let ContentBox = styled(Box)(() => {
  return {
    width: "412px",
    height: "417px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  };
});

export default function InviteTeamMateModal({isModalOpen, setModalState}) {
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
            padding: 0,
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
      <Typography
          textAlign={"center"}
          sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
        >
         Invite Team Mate
        </Typography>
      </ContentBox>
    </Dialog>
  );
}
