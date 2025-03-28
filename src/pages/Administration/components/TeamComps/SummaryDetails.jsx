import { Dialog, styled, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import TimesIcon from "../../../../assets/svgs/TimesIcon";
import DetailsInSummary from "./DetailsInSummary";
import Permissions from "./Permissions";
import ChangeRoleView from "./ChangeRoleView";

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

export default function SummaryDetails({
  isModalOpen,
  setModalState,
  details,
  setDetails,
}) {
  let [isPermission, setIsPermission] = useState(false);
  let [isSummary, setSummary] = useState(false);
  let [isChangeRole, setChangeRole] = useState(false);

  useEffect(() => {
    setSummary(true);
  }, [isModalOpen]);

  function onModalClose() {
    setModalState(false);
    setIsPermission(false);
    setSummary(false);
    setChangeRole(false);
  }

  function handleViewPermissions() {
    setSummary(false)
    setIsPermission(true);
  }

  function handleChangeRole() {
    console.log("566 shss")
    setSummary(false);
    setIsPermission(false);
    setChangeRole(true);
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
      {isSummary && (
        <DetailsInSummary
          rowDetail={details}
          setPermission={handleViewPermissions}
          changeRole={handleChangeRole}
        />
      )}
    {isPermission && (
        <Permissions />
    )}
    {isChangeRole && (
      <ChangeRoleView />
    )}
    </Dialog>
  );
}
