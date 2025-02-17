import { Card, CardContent, styled} from "@mui/material"
import { useState } from "react"

//gh GH "" || @
import VerifyOtp from "./components/Verify-Otp"
import CreatePassword from "./components/Create-Password"


let LoginCard = styled(Card)(({theme}) => {
    
  return {
    backgroundColor: theme.palette.background.default, // Custom background for all Card components
    boxShadow: `none`,
    width: 344,
    height: `100vh`,
    display: 'flex',
    gap: 1,
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center',      // Centers vertically
    margin: '0 auto',   
  }
})

export default function ResetPassword() {
    let [isOtpVerified, setOtpVerified] = useState(false);
   
    function handleSetOtp() {
      setOtpVerified(true)
    }

    return (
      <LoginCard>
        <CardContent>
          {isOtpVerified? <CreatePassword />: <VerifyOtp setVerified={handleSetOtp} />}
        </CardContent>
      </LoginCard>
    )
}