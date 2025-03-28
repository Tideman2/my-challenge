import { Dialog, styled, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import TimesIcon from "../../../../assets/svgs/TimesIcon";
import DetailsInSummary from "./DetailsInSummary";
import Permissions from "./Permissions";

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

let CustomTypo = styled(Typography)(() => {
  return {
    fontSize: "13px",
    color: "#1A1C1F",
    marginBottom: "5px",
    fontWeight: 600,
  };
});

export default function SummaryDetails({
  isModalOpen,
  setModalState,
  details,
  setDetails,
}) {
  let [isPermission, setIsPermission] = useState(false);

  function onModalClose() {
    setModalState(false);
    setIsPermission(false)
  }

  function HandleViewPermissions() {
    setIsPermission(true);
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
      {isPermission ? (
        <Permissions />
      ) : (
        <DetailsInSummary
          rowDetail={details}
          setPermission={HandleViewPermissions}
        />
      )}
    </Dialog>
  );
}
