//gh GH "" || @
import { useState } from "react";
import { Card, CardContent, FormHelperText, Button, Typography, TextField, FormControl,
    FormLabel, InputAdornment, Box,
  } from "@mui/material";

// import { Form } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { updateEmail, updatePassword, autenticate } from "../reduxStore/features/auth";

import { Link, Form, redirect } from "react-router-dom";

export default function Login() {
 let [emailError, setEmailError] = useState(false);
 let [passWordError, setPasswordError] = useState(false);
 let [showPassword, setShowPassword] = useState(false);
 let dispatch = useDispatch();

 //user email from redux store
 let userEmail = useSelector((state) => {return state.auth.user.email})

 //user password from redux store
 let userPassword = useSelector((state) => {return state.auth.user.password})


  // Email validation function
  function validateEmail(e) {
    let email = e.target.value.trim();
    //update email in redux
    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email)); // Set error if email is invalid
  }



//  Password validation function
function validatePassword(e) {
    let pass = e.target.value;
    console.log(pass)
    setPasswordError(pass.length < 8);
  }

    return (
        <Card>
            <CardContent>
            <Typography variant="h1">Log into your account</Typography>
               <Form method="post">
                {/* form control for email input */}
                <FormControl error= {emailError} sx={{ mb: 2, mt: 2 }}>
                    <FormLabel>
                    Email address
                    </FormLabel>
                    <TextField variant="outlined" 
                    name="email"
                    onChange={(e) => {dispatch(updateEmail({email: e.target.value}))}} 
                    value={userEmail?? ``}
                    onBlur={validateEmail}/>
                {emailError && <FormHelperText sx={{color: `red`}}>Input a valid email</FormHelperText>}
                </FormControl>

                {/* form control for password input */}
                <FormControl error= {passWordError} sx={{ mb: 2 }}>
                    <FormLabel>
                    Password
                    </FormLabel>
                    <TextField variant="outlined"
                     type={showPassword? `text`: `password`}
                     name="password"
                     onChange={(e) => {dispatch(updatePassword({password: e.target.value}))}}
                     onBlur={validatePassword}
                     value={userPassword?? ``}
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
                {passWordError && <FormHelperText sx={{color: `red`}}>digits must be higher than 7</FormHelperText>}
                </FormControl>

                <Button type="submit" sx={{
                marginTop: 3,
               }}>Log in</Button>
               </Form>
            
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


//route action to simulate user login
export async function loginAction({ request }) {
  let formData = await request.formData();
  let enteredEmail = formData.get("email");
  let enteredPassword = formData.get("password");
  let hasAccount = false;

  // Get user data from localStorage
  let userDatas = localStorage.getItem("userData");
  let users = userDatas ? JSON.parse(userDatas) : []; // Ensure it's an array

  console.log(users)

  // Check if user exists
  for (let { email, password } of users) {
    if (email === enteredEmail && password === enteredPassword) {
      hasAccount = true;
      break;
    }
  }

  localStorage.setItem(`userData`, JSON.stringify(users));

  if (hasAccount) {
    alert("Successfully logged in");
    return redirect("/dashboard");
  } else {
     alert(`Account does not exist but you can pass`)
    return redirect("register");
  }
}
