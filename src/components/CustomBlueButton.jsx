import { Button, styled } from "@mui/material";

let CustomButton = styled(Button)(({ h, w }) => {
  return {
    all: "unset",
    cursor: "pointer",
    display: "flex",
    borderRadius: "4px",
    width: w ? w : "auto",
    height: h ? h : "auto",
    backgroundColor: "#2D75B6",
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
});

export default function CustomBlueButton({
  width,
  height,
  children,
  ...props
}) {
  return (
    <CustomButton h={height} w={width} {...props}>
      {children}
    </CustomButton>
  );
}
