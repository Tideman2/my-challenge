import { Box, styled, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

import Panel from "./Components/Panel";
import ProfileInformation from "./Components/ProfileInformaton";
import ChangePassword from "./Components/ChangePassword";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "154px",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
    marginBottom: "40px",
    marginLeft: "20px"
  };
});

let tabSxProps = {
  height: "100%",
  "& .MuiTab-root": {
    textTransform: "none",
    fontSize: "14px",
    color: "#BABABA", 
  },
  "& .MuiTab-root.Mui-selected": {
    color: "#000000", // Active tab color
    fontWeight: 400, 
  },
};

export default function Settings() {
  let [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Box>
      <UserWelComeComponent>Settings</UserWelComeComponent>
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            borderRight: 1,
            borderColor: "divider",
            height: "fit-content"
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={tabSxProps}
          >
            <Tab
              label="Profile information"
              sx={{
                textTransform: "none",
                fontSize: "14px",
              }}
            />
            <Tab
              label="Change password"
              sx={{
                textTransform: "none",
                fontSize: "14px",
              }}
            />
          </Tabs>
        </Box>

        <Panel value={value} index={0}>
          <ProfileInformation />
        </Panel>
        <Panel value={value} index={1}>
          <ChangePassword />
        </Panel>
      </Box>
    </Box>
  );
}
