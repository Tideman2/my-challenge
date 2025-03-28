import { Dialog, styled, Box, Typography, FormControl } from "@mui/material";

import TimesIcon from "../../../../assets/svgs/TimesIcon";
import InputComponent from "../../../../components/InputComponent";
import SelectRoleDrodown from "./SelectRoleDropdown";
import AssignToDrodown from "./AssignToDropdown";
import CustomBlueButton from "../../../../components/CustomBlueButton";

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
    boxSizing: "content-box",
    height: "417px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
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

export default function InviteTeamMateModal({ isModalOpen, setModalState }) {
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
        <Typography
          textAlign={"center"}
          sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
        >
          Invite Team Mate
        </Typography>
        <Box width={"344px"} display={"flex"} flexDirection={"column"}>
          <Box>
            <CustomTypo>Email Address</CustomTypo>
            <InputComponent type={"text"} placeholder={"example@gmail.com"} />
          </Box>
          <FormControl sx={{ marginTop: "10px" }}>
            <CustomTypo>Role</CustomTypo>
            <SelectRoleDrodown />
          </FormControl>
          <FormControl sx={{ marginTop: "10px" }}>
            <CustomTypo>Assign to</CustomTypo>
            <AssignToDrodown />
          </FormControl>
        </Box>
        <CustomBlueButton width={"344px"} height={"46.86px"}>Send invite</CustomBlueButton>
      </ContentBox>
    </Dialog>
  );
}
