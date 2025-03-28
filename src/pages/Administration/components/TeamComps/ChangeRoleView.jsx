import { Box, styled, Typography } from "@mui/material";

import SelectRoleDrodown from "./SelectRoleDropdown";
import CustomBlueButton from "../../../../components/CustomBlueButton";

let ContentBox = styled(Box)(() => {
  return {
    width: "412px",
    boxSizing: "border-box",
    padding: "30px",
    height: "364px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  };
});

export default function ChangeRoleView() {
  return (
    <ContentBox>
      <Box sx={{
        width: "344px",
        height: "248px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
      <Typography
        textAlign={"center"}
        sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
      >
        Change role
      </Typography>
      <SelectRoleDrodown />
      <CustomBlueButton height={"48px"} width={"344px"}>Change role</CustomBlueButton>
      </Box>
    </ContentBox>
  );
}
