import { Form, redirect } from "react-router-dom"
import { FormControl, TextField, Typography, Card, CardContent, Button, FormLabel } from "@mui/material"

//gh
export default function Register() {

    return (
        <Card>
            <CardContent>
            <Typography variant="h1">Create Account</Typography>
            <Form method="post">
           <FormControl sx={{ mb: 2 , mt: 2}}>
             <FormLabel>
               email
             </FormLabel>
             <TextField name="email"/>
           </FormControl>

           <FormControl  sx={{ mb: 2 }}>
           <FormLabel>
               password
             </FormLabel>
            <TextField name="password" />
           </FormControl>
           <Button type="submit" sx={{
                marginTop: 3,
               }}>Log in</Button>
        </Form>
            </CardContent>
           
        </Card>
    )
}

export async function registerAction({request}) {
    let formData = await request.formData();
    let enteredEmail = formData.get(`email`);
    let enteredPassword = formData.get(`password`);
    let hasAccount = false;

      // Get user data from localStorage
    let userDatas = localStorage.getItem("userData");
    let users = userDatas ? JSON.parse(userDatas) : [];
    
    // Check if account exists
  for (let { email, password } of users) {
    if (email === enteredEmail && password === enteredPassword) {
      hasAccount = true;
      break;
    }
  }

  if (hasAccount) {
    alert("Account already exists");
    return redirect("/");
  } else {
    users.push({
        email: enteredEmail,
        password: enteredPassword
    })

    localStorage.setItem(`userData`, JSON.stringify(users))
     alert(`Account successfully created`);
    return redirect("/");
  }

 
}