//gh GH "" || @
import { useState } from "react";
import { Card, CardContent, FormHelperText, Button, Typography, TextField, FormControl,
    FormLabel, InputAdornment, Box
  } from "@mui/material";

import { Link } from "react-router-dom";

export default function Login() {
 let [emailError, setEmailError] = useState(false);
 let [passWordError, setPasswordError] = useState(false);
 let [showPassword, setShowPassword] = useState(false);


  // Email validation function
//   function validateEmail() {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//   }

 // Password validation function
//  function validatePassword() {
//     if (password.length < 8) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }
//   }

    return (
        <Card sx={{ height: `100vh`,  }}>
            <CardContent>
            <Typography sx={{
                width: 303,
                heigh: 38,
                fontSize: 28,
                fontWeight: 600,
                 marginBottom: 3,
                color: `#1A1C1F`,
               }}>Log into your account</Typography>
             
               <form noValidate>
                {/* form control for email input */}
                <FormControl error= {emailError} sx={{ mb: 2 }}>
                    <FormLabel>
                    Email address
                    </FormLabel>
                    <TextField variant="outlined" />
                {emailError && <FormHelperText sx={{color: `red`}}>Input a valid email</FormHelperText>}
                </FormControl>

                {/* form control for password input */}
                <FormControl error= {emailError} sx={{ mb: 2 }}>
                    <FormLabel>
                    Password
                    </FormLabel>
                    <TextField variant="outlined"
                     type={showPassword? `text`: `password`}
                     InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography 
                              onClick={() => setShowPassword(!showPassword)} 
                              sx={{
                                 textTransform: "none", 
                                 width: 35,
                                 height: 20,
                                 fontWeight: 600,
                                 fontSize: 13
                                }} variant="subtitle" // Prevent uppercase text
                            >
                              {showPassword ? "Hide" : "Show"}
                            </Typography>
                          </InputAdornment>
                        ),
                      }}/>
                {emailError && <FormHelperText sx={{color: `red`}}>Input a valid email</FormHelperText>}
                </FormControl>
             
               </form>
            
               <Button sx={{
                marginTop: 3,
               }}>Log in</Button>
              
             <Box sx={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                marginTop: 2,
             }}>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: 12,
                    width: 134,
                    height: 22,
                }}>
                    Forgot your password? 
                </Typography>
                <Link to={`reset-password`} style={{ textDecoration: "none" }}>
                 <Typography  sx={{
                    width: 73,
                    height: 22,
                    fontWeight: 400,
                    fontSize: 12,
                    color: `black`
                 }}>
                 Reset it here
                 </Typography>
                </Link>
             </Box>
            </CardContent>
        </Card>
    )
}