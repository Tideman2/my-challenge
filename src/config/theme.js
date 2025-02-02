import { createTheme } from "@mui/material";

let fontFamily = `BR Firma, sans-serif`
export const theme = createTheme({
    components: {
      // Override the default Card component styles
      MuiCard: {
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily,
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
      }},
  typography: {
    fontFamily,
    h1: {
        width: 303,
        heigh: 38,
        fontSize: 28,
        fontWeight: 600,
        marginBottom: 3,
        color: `#1A1C1F`,
    },
  },
  palette: {
    primary: {
      main: "#2D75B6",
    },
    secondary: {
      main: "#F9FAFA;",
    },
    success: {
      main: "#25B883",
    },
    error: {
      main: "#EF4444",
    },
    background: {
      default: "#fff",
      sidebar: "#F9FAFA",
    },
  }},
);
