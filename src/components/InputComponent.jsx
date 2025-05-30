import {
  TextField,
  FormControl,
  FormLabel,
  styled,
  FormHelperText,
  Typography,
  InputAdornment
} from "@mui/material";
import { useState } from "react"


let LoginLabel = styled(FormLabel, {
  shouldForwardProp: (prop) => prop !== "labelColor" // <- filter it
})(({labelColor}) => {
  return {
    fontWeight: 600, // Adjust font weight for all FormLabel components
    fontSize: 13,
    height: 20,
    marginBottom: "5px",
    color: labelColor? labelColor: "black"
  };
});


export default function InputComponent({ type, label, error, labelColor, formSx, ...restProps }) {
let [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl fullWidth sx={formSx || {}} >
      {label && <LoginLabel labelColor={labelColor}>{label}</LoginLabel>}
      <TextField
        type={showPassword? `text`: type}
        {...restProps}
        slotProps={{
          ...restProps.slotProps,
          input: {
            endAdornment: type === `password`? (
              <InputAdornment position="end">
                <Typography
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    textTransform: "none",
                    width: 35,
                    height: 20,
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                  variant="subtitle" // Prevent uppercase text
                >
                  {showPassword ? "Hide" : "Show"}
                </Typography>
              </InputAdornment>
            ): null,
            ...restProps.slotProps?.input
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#EBEDEF !important",
          },
        }}        
      />
      {error && <FormHelperText sx={{
        color: `red`
      }}>{error}</FormHelperText>}
    </FormControl>
  );
}
