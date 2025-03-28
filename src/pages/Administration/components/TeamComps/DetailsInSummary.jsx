import { Box, styled, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

import CustomBlueButton from "../../../../components/CustomBlueButton";
import CopyIcon from "../../../../assets/svgs/CopyIcon";

let ContentBox = styled(Box)(({ increase }) => {
  return {
    width: "486px",
    boxSizing: "border-box",
    height: increase ? "610px" : "566px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px"
  };
});

let RoundedTextBox = styled(Typography)(() => {
  return {
    width: "51px",
    height: "51px",
    borderRadius: "50%",
    backgroundColor: "#F0E9E9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#8B5C5D",
    fontSize: "14px",
    fontWeight: 400,
  };
});

let TextWrapper = styled(Typography)(() => {
  return {
    fontWeight: 500,
    fontSize: "14px",
    color: "#1A1C1F",
    width: "fit-content",
  };
});

let TextBox = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  };
});

const HrLine = styled("hr")(() => ({
  backgroundColor: "#EBEEEF",
  height: "1px",
  border: "none",
  width: "100%",
}));

let CustomButton = styled(Button)(({}) => {
  return {
    all: "unset",
    cursor: "pointer",
    display: "flex",
    border: "1px solid #2D75B6",
    borderRadius: "4px",
    width: "102px",
    fontWeight: 600,
    height: "35px",
    backgroundColor: "unset",
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    color: "#2D75B6",
  };
});

export default function DetailsInSummary({ rowDetail, setPermission, changeRole }) {
  let [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (rowDetail.role === "admin") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <ContentBox increase={isAdmin.toString()}>
      <Typography
        textAlign={"center"}
        sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
      >
        Summary details
      </Typography>
      <Box
        sx={{
          width: "419px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          height: "323px",
          backgroundColor: "#F9FAFA",
          borderRadius: "8px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px",
          }}
        >
          <RoundedTextBox>TO</RoundedTextBox>
          {isAdmin && <CustomButton onClick={(e) => {
            e.stopPropagation()
            changeRole()
          }}>Change Role</CustomButton>}
        </Box>
        <TextWrapper marginBottom={"10px"} marginTop={"10px"}>
          {rowDetail.fullName}
        </TextWrapper>
        <TextBox>
          <TextWrapper>Email Address</TextWrapper>
          <TextWrapper display={"flex"} alignItems={"center"} gap={"3px"}>
            {rowDetail.email}
            <CopyIcon
              style={{ width: "15px", height: "15px", stroke: "#1A1C1F" }}
            />
          </TextWrapper>
        </TextBox>
        <HrLine />
        <TextBox>
          <TextWrapper>Last Login</TextWrapper>
          <TextWrapper>7 hours</TextWrapper>
        </TextBox>
        <HrLine />
        <TextBox>
          <TextWrapper>Role</TextWrapper>
          <TextWrapper>{rowDetail.role}</TextWrapper>
        </TextBox>
      </Box>
      <CustomBlueButton
        width={"416px"}
        height={"48px"}
        borderradius={"4px"}
        onClick={setPermission}
      >
        View permissions
      </CustomBlueButton>
      {isAdmin && (
        <CustomBlueButton
          width={"416px"}
          height={"48px"}
          borderradius={"4px"}
          sx={{ backgroundColor: "#FC6250" }}
          onClick={setPermission}
        >
          Remove member
        </CustomBlueButton>
      )}
    </ContentBox>
  );
}
