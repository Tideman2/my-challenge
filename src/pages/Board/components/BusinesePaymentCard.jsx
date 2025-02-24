import { styled, Card, Box, Typography } from "@mui/material";

let BusinesePayment = styled(Card)(() => {
  return {
    width: "260px",
    height: "100%",
    padding: "10px",
    borderRadius: "4px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid  rgba(0, 0, 0, 0.1)",
    boxShadow: "none"
  };
});

let CircleInCard = styled(Box)(() => {
  return {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    border: "1px solid #D9DEDF"
  };
});

let LabelText = styled(Typography)(() => {
  return {
    width: "171px",
    height: "21px",
    fontSize: "13px",
    fontWeight: "lighter",
  };
});

let ValueText = styled(Typography)(() => {
    return {
      width: "171px",
      height: "32px",
      fontSize: "24px",
      fontWeight: "bold",
      letterSpacing: "0px",
      whiteSpace: "nowrap",
    };
  });

export default function BusinesePaymentCard({ label, value }) {
  return (
    <BusinesePayment>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
      >
        <LabelText>{label}</LabelText>
        <CircleInCard />
      </Box>
      <ValueText>
       {value}
      </ValueText>
    </BusinesePayment>
  );
}
