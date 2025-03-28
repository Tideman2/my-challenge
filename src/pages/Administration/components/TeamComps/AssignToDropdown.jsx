import { Select, MenuItem, styled } from "@mui/material";
import { useState } from "react";

const CustomSelect = styled(Select)(() => ({
  backgroundColor: "transparent",
  width: "100%",
  height: "46px",
  color: "#B0B0B0",
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
  disablePortal: true,
};

export default function AssignToDrodown() {
  let [value, setValue] = useState("");
  let [isOpem, setIsOpen] = useState(false);

  return (
    <CustomSelect
      displayEmpty
      value={value}
      sx={{ marginBottom: isOpem ? "65px" : "0px" }}
      MenuProps={menuProps}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      renderValue={(selected) => selected || "Select Business"}
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <MenuItem value="perryHoldings">Perry holdings</MenuItem>
    </CustomSelect>
  );
}
