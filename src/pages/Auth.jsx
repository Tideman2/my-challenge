import { Outlet } from "react-router-dom"
import { createTheme, ThemeProvider, Box } from '@mui/material';
//gh GH "" || @

// Create a custom theme with card customization for the Auth route
const theme = createTheme({
    components: {
      // Override the default Card component styles
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'white',  // Custom background for all Card components
            boxShadow: `none`,
            width: 344,
            height: `100vh`,
            display: 'flex',
            justifyContent: 'center', // Centers horizontally
            alignItems: 'center',      // Centers vertically
            margin: '0 auto',   
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            width: 344,
            backgroundColor: `#4A72A3`,
            color: `white`,
            height: 48,
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            width: 344,
            // No need to set height here
            '& .MuiOutlinedInput-root': {
              height: 39, // Set height of the outlined input
              '& fieldset': {
                borderColor: 'gray', // Set border color for all TextField variants
              },
              '&:hover fieldset': {
                borderColor: '#4A72A3', // Border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#4A72A3', // Border color when focused
              },
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            fontWeight: 600, // Adjust font weight for all FormLabel components
            fontSize: 13,
            width: 90,
            height: 20
          },
        },
      }},
  typography: {
    h1: {
        width: 303,
        heigh: 38,
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 3,
        color: `#1A1C1F`,
    }
  }},
);
  
export default function AuthenticationPage() {

    return (
    
        <>
        <ThemeProvider theme={theme}>
            <Outlet />
        </ThemeProvider>
        </>
    )

    
}