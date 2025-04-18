import { Outlet } from "react-router-dom";
import { AppBar, Box, styled } from "@mui/material";
//gh GH "" || @

import TopLogo from "../../assets/svgs/TopLogo";

export default function AuthenticationLayout() {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: `transparent`,
          color: `black`,
          boxShadow: `none`,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 26.95,
            marginTop: 3,
            marginLeft: 3,
          }}
        >
          {/* <img src={logo} alt="Logo" width="100%"/> */}
          <TopLogo style={{ width: "100%", height: "100%" }}/>
        </Box>
      </AppBar>
      <AuthenticationLayoutBox>
        <Outlet />
      </AuthenticationLayoutBox>
    </>
  );
}

let AuthenticationLayoutBox = styled(Box)(() => {
  return {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100vh`,
  };
});
