import { Outlet } from "react-router-dom";
import { AppBar, Box, styled } from "@mui/material";
//gh GH "" || @

import logo from "../../assets/img/logo_gzxyo7 2.png";
import TopLogo from "../../assets/svgs/toplogo";
  
export default function AuthenticationLayout() {
      
    return ( 
        <>
        <AppBar sx={{
            backgroundColor: `transparent`,
            color: `black`,
            boxShadow: `none`
        }}>
            <Box sx={{
                width: 48,
                height: 26.95,
                marginTop: 3,
                marginLeft: 3,
            }}>
            {/* <img src={logo} alt="Logo" width="100%"/> */}
            <TopLogo />
            </Box>
        </AppBar>
         <AuthenticationLayoutBox>
         <Outlet />
         </AuthenticationLayoutBox>
        </>
    )
    
}

let AuthenticationLayoutBox = styled(Box)(() => {
    return {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`
    }
})

