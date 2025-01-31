import { Card, CardContent, Typography, TextField, FormControl, FormLabel, Button} from "@mui/material"
import { Form, Link } from "react-router-dom"

export default function ResetPassword() {

    return (
      <Card>
        <CardContent sx={{
            width: `100%`,
        }}>
          <Typography variant="h1" sx={{
            width: 315,
          }}>
            Forgot your password?
          </Typography>
          <Typography sx={{
            width: 362,
            height: 43,
            fontWeight: 400,
            fontSize: 13,
            mt: 3,
            mb: 3,
          }}>
            Enter your email address and we will send you link to reset your password
          </Typography>
        <Form>
         <FormControl sx={{
            mb: 3,
         }}>
            <FormLabel>Email address</FormLabel>
            <TextField />
         </FormControl>
           <Button>Continue</Button>
        </Form>
        <Link to={`..`} style={{ textDecoration: "none",}}>
                 <Typography  sx={{
                    display:`block`,
                    width: `100%`,
                    height: 22,
                    fontWeight: 500,
                    fontSize: 12,
                    color: `black`,
                    textAlign: `center`,
                    mt: 2
                 }}>
                 Return to Log in
                 </Typography>
                </Link>
        </CardContent>
      </Card>
    )
}