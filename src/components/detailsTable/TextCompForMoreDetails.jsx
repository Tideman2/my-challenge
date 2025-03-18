import { Box, styled, Typography } from "@mui/material";

let TopText = styled(Typography)(() => ({
  width: "fit-content",
  height: "15px",
  fontSize: "12px",
  color: "#7C7A78",
  
}));

let SubText = styled(Typography)(() => ({
  width: "fit-content",
  height: "18px",
  fontSize: "14px",
  color: "#213336",
}));

//component used in moreDetails js file in data folder
export default function TextCompForMoreDetails({ top, sub }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      padding={"0px !important"}
      marginBottom={"15px"}
    >
      <TopText>{top}</TopText>
      <SubText>{sub? sub: ("more to come")}</SubText>
    </Box>
  );
}
