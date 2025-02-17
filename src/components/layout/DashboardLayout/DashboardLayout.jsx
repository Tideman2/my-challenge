import { Box, Drawer, Container, Typography, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";

import TopLogo from "../../../assets/svgs/TopLogo";
import administrationIcon from "../../../assets/img/personalcard.png";
import NavLinks from "./components/NavLinks";
import TransactionIcon from "../../../assets/svgs/TransactionIcon";
import BusinessIcon from "../../../assets/svgs/BusinessIcon";
import SettiingsIcon from "../../../assets/svgs/SettingsIcon";
import LogOutIcon from "../../../assets/svgs/LogOutIcon";
import ActivityLogIcon from "../../../assets/svgs/ActivityLogIcon";
import AdminNameIcon from "../../../assets/svgs/AdminNameIcon";
import DropDownArrowIcon from "../../../assets/svgs/DropDownArrowIcon";

const NavLinkDrawer = styled(Drawer)({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 260,
    height: "100%", // Fixed height
    backgroundColor: "#F9FAFA",
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    overflow: "hidden",
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

const AdminIconBox = styled(Box)(() => {
  return {
    width: "100%",
    height: "82px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    borderBottom: "0.4px solid lightgray", 
  };
});


export default function DashboardLayout() {
  return (
    <Container
      sx={{
        margin: "0px",
        padding: "0px",
        display: "flex", // Flex layout to handle sidebar + content
      }}
      maxWidth={false}
    >
      <NavLinkDrawer variant="permanent" margin= "0px">
        <LogoBox>
          <TopLogo style={{ width: "100%", height: "100%" }} />
        </LogoBox>
        <NavLinksBox
          sx={{
            mb: "70px",
            mt: "45px",
          }}
        >
          {/* Icon Button for DashBoard */}
          <Box
            sx={{
              width: "100%",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <NavLinks
              icon={<GridViewIcon />}
              path={"/dashBoard"}
              title="DashBoard"
              end
            />
            <NavLinks
              icon={<TransactionIcon />}
              path={"/dashBoard/transactions"}
              title="Transactions"
            />
            <NavLinks
              icon={<BusinessIcon />}
              path={"/dashBoard/businesses"}
              title="Businesses"
            />
            <NavLinks
              icon={
                <LinkIconBox>
                  <img
                    src={administrationIcon}
                    alt="administrationIcon"
                    width="100%"
                  />
                </LinkIconBox>
              }
              path={"/dashBoard/administration"}
              title="Administration"
              menuItems={[
                {
                  title: "Team mates",
                  path: "/dashBoard/administration/team-mates",
                },
                {
                  title: "Roles and privileges",
                  path: "/dashBoard/administration/roles-and-privileges",
                },
              ]}
            />
            <NavLinks
              icon={<ActivityLogIcon />}
              path={"/dashBoard/activity-log"}
              title="Activity log"
            />
          </Box>
        </NavLinksBox>
        <hr style={{ width: "100%", fontWeight: "lighter" }} />
        <NavLinksBox sx={{ mt: "10px" }}>
          <Box>
            <NavLinks
              icon={
                <LinkIconBox>
                  <SettiingsIcon />
                </LinkIconBox>
              }
              path={"/dashBoard/setting"}
              title={"Settings"}
            />
            <NavLinks
              icon={<LogOutIcon />}
              path={"dashBoard/activity-log"}
              title={"Logout"}
              onClick={() => {
                console.log("loged out");
              }}
            />
          </Box>
        </NavLinksBox>
      </NavLinkDrawer>

      {/* Content area, adjusted to leave space for sidebar */}
      <Box
        sx={{
          paddingLeft: "260px", // Ensure enough space for the drawer
          width: "calc(100vw - 260px)", // Prevent overflow
          height: "100vh",
        }}
      >
        <AdminIconBox>
          <Box height={"32px"} width={"auto"} display={"flex"} gap={"10px"}>
          <AdminNameIcon style={{ width: "32px", height: "32px" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography width={"fit-content"} height={"18px"}>
              Admin Name
            </Typography>
            <DropDownArrowIcon style={{ width: "12.73px", height: "7.78px" }} />
          </Box>
          </Box>
        </AdminIconBox>
        <Outlet />
      </Box>
    </Container>
  );
}
