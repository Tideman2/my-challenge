import {
  MenuItem,
  FormControl,
  Select,
  styled,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

import DateIcon from "../../../assets/svgs/DateIcon";

// Custom Styled Select
const CustomSelect = styled(Select)(() => ({
    backgroundColor: "transparent",
    width: "167px",
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

export default function SelectDateDropdown() {
  let [date, setDate] = useState("");

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <CustomSelect
        value={date}
        onChange={handleDateChange}
        displayEmpty
        MenuProps={menuProps}
        renderValue={(selected) =>
          selected ? (
            selected // Show selected value
          ) : (
            <Box display="flex" alignItems="center">
              <DateIcon
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
                Select date
              </Typography>
            </Box>
          )
        }
      >
        <MenuItem value={"today"}>Today</MenuItem>
        <MenuItem value={"thisWeek"}>This week</MenuItem>
        <MenuItem value={"last30Days"}>Last 30 days</MenuItem>
        <MenuItem value={"last90Days"}>Last 90 days</MenuItem>
        <MenuItem value={"customDate"}>Custom date</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}

//
