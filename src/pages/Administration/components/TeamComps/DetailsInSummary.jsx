import { Box, styled, Typography } from "@mui/material";

import CustomBlueButton from "../../../../components/CustomBlueButton";
import CopyIcon from "../../../../assets/svgs/CopyIcon";

let ContentBox = styled(Box)(() => {
  return {
    width: "486px",
    boxSizing: "border-box",
    height: "566px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "6px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
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

export default function DetailsInSummary({ rowDetail, setPermission }) {
  return (
    <ContentBox>
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
        <RoundedTextBox>TO</RoundedTextBox>
        <TextWrapper marginBottom={"10px"} marginTop={"10px"}>
          {rowDetail.fullName}
        </TextWrapper>
        <TextBox>
          <TextWrapper>Email Address</TextWrapper>
          <TextWrapper display={"flex"} alignItems={"center"} gap={"3px"}>
            {rowDetail.email}
            <CopyIcon style={{width: "15px", height: "15px", stroke: "#1A1C1F"}} />
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
        borderRadius={"4px"}
        onClick={setPermission}
      >
        View permissions
      </CustomBlueButton>
    </ContentBox>
  );
}
