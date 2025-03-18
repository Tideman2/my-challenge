import { Box, Typography, styled } from "@mui/material";

let TextBox = styled(Box)(() => {
  return {
    position: "absolute",
    top: "-15px",
    left: "-90px",
    width: "148px",
    height: "49px",
    paddingTop: "4px",
    paddingBottom: "4px",
    backgroundColor: "white",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)", 
    borderRadius: "5px",
    zIndex: 10,
  };
});

//more details comp used in tabletodisplay component
export default function MoreDetails(props) {
  return (
    <TextBox {...props}>
        <Box sx={{
            width: "100%",
            backgroundColor: "#F9FAFA",
            height: "100%",
            borderRadius: "5px",
            paddingLeft: "8px",
            boxSizing: "border-box",
        }}>
      <Typography
        variant="P"
        sx={{
          fontSize: "13px",
          color:  "#1A1C1F",
          padding: "8px"
        }}
      >
        More details
      </Typography>
      </Box>
    </TextBox>
  );
}
