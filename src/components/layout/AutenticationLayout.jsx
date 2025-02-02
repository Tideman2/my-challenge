import { Outlet } from "react-router-dom"
import { AppBar, Box, styled } from "@mui/material"
//gh GH "" || @
  
export default function AuthenticationLayout() {
      
    return ( 
        <>
        <AppBar sx={{
            backgroundColor: `transparent`,
            color: `black`,
            boxShadow: `none`
        }}>
            <p>Logo for the layout</p>
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

