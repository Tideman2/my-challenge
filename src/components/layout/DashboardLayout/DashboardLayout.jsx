import { Box, Drawer, Container, Typography, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";

import logo from "../../../assets/img/logo_gzxyo7 2.png";
import transactionIcon from "../../../assets/img/transactionicon.png";
import businessIcon from "../../../assets/img/graph.png";
import administrationIcon from "../../../assets/img/personalcard.png";
import activityLogIcon from "../../../assets/img/menu-board.png";
import NavLinks from "./components/NavLinks";
import settingsIcon from "../../../assets/img/setting-2.png";
import logOutIcon from "../../../assets/img/login.png";

const NavLinkDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 260,
    height: "1024px", // Fixed height
    backgroundColor: "#F9FAFA",
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    overflow: "hidden", // Prevent scrolling
  },
});

const LogoBox = styled(Box)(() => {
  return {
    width: 48,
    height: 26.95,
    marginLeft: "20px",
    marginRight: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const NavLinksBox = styled(Box)(() => {
  return {
    width: 215,
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  };
});

const LinkIconBox = styled(Box)(() => {
  return {
    width: "24px",
    height: "24px",
  };
});

export default function DashboardLayout() {
  return (
    <Container
      sx={{
        margin: "0px",
        padding: "0px",
        minHeight: "100vh"
      }}
    >
      <NavLinkDrawer variant="permanent">
        <LogoBox>
          <img src={logo} alt="Logo" width="100%" />
        </LogoBox>
        <NavLinksBox
          sx={{
            mb: "70px",
            mt: "45px"
          }}
        >
          {/* Icon Button for DashBoard */}
          <Box sx={{ width: "100%" }}>
            <NavLinks
              iconView={<GridViewIcon />}
              toUrl={"/dashBoard"}
              title="DashBoard"
              end
            />
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img
                    src={transactionIcon}
                    alt="transactionIcon"
                    width="100%"
                  />
                </LinkIconBox>
              }
              toUrl={"/dashBoard/transactions"}
              title="Transactions"
            />
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img src={businessIcon} alt="businessIcon" width="100%" />
                </LinkIconBox>
              }
              toUrl={"/dashBoard/businesses"}
              title="Businesses"
            />
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img
                    src={administrationIcon}
                    alt="administrationIcon"
                    width="100%"
                  />
                </LinkIconBox>
              }
              toUrl={"/dashBoard/administration"}
              title="Administration"
              menuItems={["Team mates", "Roles and privileges"]}
            />
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img src={activityLogIcon} alt="activityLog" width="100%" />
                </LinkIconBox>
              }
              toUrl={"/dashBoard/activity-log"}
              title="Activity log"
            />
          </Box>
        </NavLinksBox>
        <hr style={{ width: "100vw", fontWeight: "lighter" }} />
        <NavLinksBox>
          <Box>
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img src={settingsIcon} alt="settingsIcon" width="100%" />
                </LinkIconBox>
              }
              toUrl={"/dashBoard/setting"}
              title={"Settings"}
            />
            <NavLinks
              iconView={
                <LinkIconBox>
                  <img src={logOutIcon} alt="logoutIcon" width="100%" />
                </LinkIconBox>
              }
              toUrl={"dashBoard/activity-log"}
              title={"Logout"}
            />
          </Box>
        </NavLinksBox>
      </NavLinkDrawer>

      {/* Content area, adjusted to leave space for sidebar */}
      <Box sx={{ marginLeft: "260px", paddingLeft: 2 }}>
        <Typography textAlign={"end"} color="red">
          admin
        </Typography>
        <Outlet />
      </Box>
    </Container>
  );
}
