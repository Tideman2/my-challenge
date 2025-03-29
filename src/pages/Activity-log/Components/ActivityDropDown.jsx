import {
  MenuItem,
  FormControl,
  Select,
  styled,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

import ActivityDropDownIcon from "../../../assets/svgs/ActivityDropdownIcon";

// Custom Styled Select
const CustomSelect = styled(Select)(() => ({
    backgroundColor: "transparent",
    width: "152px",
    height: "46px",
    border: "0.5px solid rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    "&.MuiOutlinedInput-root": {
      "&:hover .MuiOutlinedInput-notchedOutline": {
        border: "none !important", // Ensure no border on hover
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  }));
  

const menuProps = {
  PaperProps: {
    sx: {
      border: "0.5px solid rgba(0, 0, 0, 0.1)",
      boxShadow: "none", 
      mt: 1.5, 
      "& .MuiMenuItem-root": {
        padding: "8px 16px", // Adjust padding for items
        "&:hover": {
          backgroundColor: "transparent !important",
        },
      },
    },
  },
  autoFocus: false,

};

export default function ActivityDropdown() {
  let [value, setValue] = useState("");

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <CustomSelect
        value={value}
        onChange={handleValueChange}
        displayEmpty
        MenuProps={menuProps}
        renderValue={(selected) =>
          selected ? (
            selected
          ) : (
            <Box display="flex" alignItems="center">
              <ActivityDropDownIcon
                style={{ color: "white", width: "18px", height: "18.5px" }}
              />
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  width: "79px",
                  height: "18px",
                }}
              >
                Activities
              </Typography>
            </Box>
          )
        }
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"staffLogin"}>Staff login</MenuItem>
        <MenuItem value={"passwordChange"}>Password change</MenuItem>
        <MenuItem value={"createRole"}>Create role</MenuItem>
        <MenuItem value={"changeRole"}>Change role</MenuItem>
        <MenuItem value={"generateApiKey"}>Generate API key</MenuItem>
        <MenuItem value={"regenerateApiKey"}>Regenerate API key</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}

//
