import { Form, redirect } from "react-router-dom"
import { Typography, Card, CardContent, Button, Box, styled} from "@mui/material"

//gh
import InputComponent from "../components/InputComponent";

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

export default function Collaborate() {

    return (
        <LoginCard>
            <CardContent>
            <Typography variant="h1" sx={{
              mb: 3
            }}>Collaborate</Typography>
            <Form method="post">
            <Box sx={{
               display: 'flex',
               flexDirection: 'column',
               gap: 2,
            }}>
           <InputComponent  type={`text`} label={`Full name`}/>
           <InputComponent type={`text`} label={`Email address`}/>
           <InputComponent  type={`password`} label={`Password`}/>
           </Box>
           <Button type="submit" variant="contained" sx={{
                marginTop: 3,
                width: `100%`,
                textTransform: `none`,
                height: 48,
               }}>Collaborate</Button>
        </Form>
            </CardContent>
        </LoginCard>
    )
}

export async function collaborateAction({request}) {
    let formData = await request.formData();
    let enteredEmail = formData.get(`Email address`);
    let enteredPassword = formData.get(`Password`);
    let fullname = formData.get(`Full name`)
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