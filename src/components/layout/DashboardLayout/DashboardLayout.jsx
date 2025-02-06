import { Box, Drawer, Container, Typography, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";

import logo from "../../../assets/img/logo_gzxyo7 2.png";
import transactionIcon from "../../../assets/img/transactionicon.png";
import businessIcon from "../../../assets/img/graph.png";
import administrationIcon from "../../../assets/img/personalcard.png";
import activityLogIcon from "../../../assets/img/menu-board.png";
import NavLinks from "./components/NavLinks";

const NavLinkDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 260,
    height: "100vh", // Adjusted height to full screen
    backgroundColor: "#F9FAFA",
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
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
    height: 561,
    display: "fles",
    flexDirection: "column",
    alignSelf: "center",
    paddingRight: "5px",
    marginTop: "45px",
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
    <Container>
      <NavLinkDrawer variant="permanent">
        <LogoBox>
          <img src={logo} alt="Logo" width="100%" />
        </LogoBox>
        <NavLinksBox>
          {/* Icon Button for DashBoard */}
          <Box sx={{ width: "100%" }}>
            <NavLinks
              iconView={<GridViewIcon />}
              toUrl={"/dashBoard"}
              title="DashBoard"
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
                <img
                  src={businessIcon}
                  alt="businessIcon"
                  width="100%"
                />
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
              title="Administration >"
            />
            <NavLinks
             iconView={
              <LinkIconBox>
                <img
                  src={activityLogIcon}
                  alt="activityLog"
                  width="100%"
                />
              </LinkIconBox>
            }
              toUrl={"/dashBoard/activity-log"}
              title="Activity log"
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
