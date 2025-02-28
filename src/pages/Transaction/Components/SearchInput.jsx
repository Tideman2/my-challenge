import { useState } from "react";
import { Typography, styled, TextField, InputAdornment } from "@mui/material";


import SearchIcon from "../../../assets/svgs/SearchIcon";

let SearchField = styled(TextField)(() => {
  return {
    width: "233px",
    height: "46px",
    borderRadius: "8px",
    border: "0.5px solid rgba(0, 0, 0, 0.1)",
    "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", // Removes the default border
    },
    "&:hover fieldset": {
      border: "none", // Prevents border on hover
    },
    "&.Mui-focused fieldset": {
      border: "none", // Prevents border when focused
    },
  },
  };
});

export default function SearchInput() {
  let [searchQuery, setSearchQuery] = useState("");
  let [userFocused, setUserFocus] = useState(false)

  return (
    <SearchField
      value={searchQuery}
      slotProps={{
        input: {
          startAdornment: userFocused === false && searchQuery.length === 0? (
            <InputAdornment position="start">
              <SearchIcon style={{ width: "17px", height: "17px" }} />
              <Typography variant="subtitle" marginLeft={"8px"} sx={{
                 width: "49px",
                 height: "18px",
                 fontSize: "14px",
                 color:  "#1A1C1F",
              }}>
                search
              </Typography>
            </InputAdornment>
          ): null,
        },
      }}
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
      onFocus={() => {
        setUserFocus(true)
      }}
      onBlur={() => {
        setUserFocus(false)
      }}
    />
  );
}
