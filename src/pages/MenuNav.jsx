import { AppBar, Box, Drawer } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import NavLinks from "../components/NavLinks";
import { Outlet } from "react-router-dom";
//gh GH "" || @

const MenuNav = () => {
  return (
    <>
      <AppBar position="static" sx={{backgroundColor: `white`, boxShadow: `none`}}>
         <p>App bar</p>
      </AppBar>
      <Drawer
        variant="permanent" // Stays open permanently like a sidebar
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": { // Targets the actual drawer's styles
            width: 260,
            height: 1024,
            backgroundColor: "hsla(0, 0.00%, 96.10%, 0.81)",
          },
        }}
      >
        <Box sx={{ padding: 2, width: 215, height: 561, marginTop: 5, marginLeft: 1}}>
          {/* Icon Button for DashBoards */}
          <NavLinks iconView={<GridViewIcon />} title={`DashBoard`}/>

          {/* Icon Button for transactions */}
        </Box>
      </Drawer>
      <Box sx={{ marginLeft: "260px", paddingLeft: 2}}>
        <Outlet />
      </Box>
    </>
  );
};

export default MenuNav;
