import { Button, styled, Typography } from "@mui/material";

let ViewBtns = styled(Button)(({ theme }) => ({
  all: "unset", 
  display: "flex", 
  justifyContent: "center",
  alignItems: "center",
  width: "182px",
  height: "48px",
  backgroundColor: "white",
  borderBottom: `1px solid ${theme.palette.secondary.main}`,
  margin: "0px",
  cursor: "pointer", // Keep cursor behavior
}));

export default function FirstViewMoreDetailsBtns({ children, ...props }) {
  return (
    <ViewBtns {...props} disableElevation disableRipple variant="text">
      <Typography sx={{ fontSize: "13px" }}>{children}</Typography>
    </ViewBtns>
  );
}
