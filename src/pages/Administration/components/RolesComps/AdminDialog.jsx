import { Dialog, styled, Box, Typography } from "@mui/material";

import TimesIcon from "../../../../assets/svgs/TimesIcon";
import Permissions from "../TeamComps/Permissions";

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

export default function AdminDialog({isModalOpen, onModalClose}) {
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
      <Permissions />
    </Dialog>
  );
}
