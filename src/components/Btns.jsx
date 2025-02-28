import { Button, styled, Box } from "@mui/material";

let ButtonContainer = styled(Box)(() => {

  return {
    width: "auto",
    height: "auto"
  }
})

export default function Btns(props) {
 let isPage = props.type === "page"? props.selected: false

  return (
    <ButtonContainer>
    <Button sx={{
      fontSize: "14px",
      width: "85px",
      height: "40px",
      backgroundColor: isPage? "#F2F4F4": "none"
    }} {...props} color="black" component="span">
      {props.children}
    </Button>
    </ButtonContainer>
  );
}
