import { Typography, Box, styled } from "@mui/material";

import DropDownArrowIcon from "../../../../../assets/svgs/DropDownArrowIcon";

let CustomBox = styled(Box)(({ expand }) => {
  return {
    display: "flex",
    width: expand ? "116px" : "94px",
    height: "24px",
    alignItems: "center",
    gap: "15px",
  };
});

export default function CollapseText({ expand }) {
  return (
    <CustomBox expand={expand}>
      <Typography fontSize={"14px"} color="#1A1C1F" textTransform={"none"}>
        {expand ? "Expand" : "Collapse"}
      </Typography>
      <DropDownArrowIcon
        rotation={expand ? 0 : 180}
        style={{ width: "12.73px", height: "7.78px" }}
      />
    </CustomBox>
  );
}
