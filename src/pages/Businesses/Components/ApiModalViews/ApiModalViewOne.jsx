import { Box, Typography, styled, Button } from "@mui/material";

import CopyIcon from "../../../../assets/svgs/CopyIcon";

let ContentContainer = styled(Box)(() => {
  return {
    width: "412px",
    height: "325px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "6px",
  };
});

let ApiNumResetBox = styled(Box)(() => {
  return {
    width: "344px",
  };
});

let ApiKeyBox = styled(Box)(() => {
  return {
    width: "100%",
    height: "65px",
    border: "1px solid #EBEDEF",
    backgroundColor: "#F9FAFA",
    display: "flex",
    borderRadius: "3px",
    justifyContent: "center",
    alignItems: "center",
  };
});

let CustomTypo = styled(Typography)(() => {
  return {
    textDecoration: "underline",
    textAlign: "end",
    fontSize: "11px",
    color: "#23203D",
    marginTop: "5px",
  };
});

export default function ApiModalViewOne({reetApi}) {
  return (
    <ContentContainer>
      <Typography
        sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
      >
        API Key
      </Typography>
      <ApiNumResetBox>
        <ApiKeyBox>
          <Typography
            sx={{
              width: "fit-content",
              height: "28px",
              color: "#23203D",
              fontSize: "14px",
            }}
          >
            6fea6a05-892b-468f-9fc9-c0520
          </Typography>
        </ApiKeyBox>
        <CustomTypo onClick={reetApi}>Reset Api Key</CustomTypo>
      </ApiNumResetBox>
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "344px",
          margin: "none",
          textTransform: `none`,
          height: 48,
        }}
      >
        Copy Api Key <CopyIcon style={{marginLeft:"5px"}}/>
      </Button>
    </ContentContainer>
  );
}
