import {
  MenuItem,
  FormControl,
  Select,
  styled,
  Box,
  FormLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";

let DropDownLabel = styled(Typography)(() => {
  return {
    fontWeight: 600, // Adjust font weight for all FormLabel components
    fontSize: 13,
    height: 20,
    color: "#1A1C1F"
  };
});


const CustomSelect = styled(Select)(() => ({
  backgroundColor: "transparent",
  width: "100%",
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

export default function AddNewBusinessDropdown({title}) {
  let [business, setBusiness] = useState("Real estate");

  function handleSetBusiness(event) {
    setBusiness(event.target.value);
  }
  return (
    <FormControl>
      <DropDownLabel>{title}</DropDownLabel>
      <CustomSelect onChange={handleSetBusiness} value={business} MenuProps={menuProps}>
        <MenuItem value={"Real estate"}>Real estate</MenuItem>
        <MenuItem value={"retail"}>Retail</MenuItem>
        <MenuItem value={"wholesale"}>Wholesale</MenuItem>
      </CustomSelect>
    </FormControl>
  );
}
