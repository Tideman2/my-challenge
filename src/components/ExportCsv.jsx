import { Button, Typography, styled } from "@mui/material";
import UploadIcon from "../assets/svgs/UploadIcon";

// Custom Styled Button
const CustomButton = styled(Button)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "0.5px solid rgba(0, 0, 0, 0.1)",
  padding: 0,
  width: "129px",
  height: "46px",
  minWidth: "auto",
  boxSizing: "border-box",
  display: "flex",
  gap: "10px",
//   justifyContent:  "space-around",
  alignItems: "center",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&:focus": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  "&:active": {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}));

export default function ExportCsv() {
  return (
    <CustomButton disableRipple>
      <UploadIcon style={{  width: "24px", height: "24.5px" }}/>
      <Typography variant="subtitle" sx={{
        width: "73px",
        height: "18px",
        color: "black"
      }}>Export csv</Typography>
    </CustomButton>
  );
}

