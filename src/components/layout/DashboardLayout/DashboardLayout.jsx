import { Box, Drawer, Container, Typography, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";

import TopLogo from "../../../assets/svgs/TopLogo";
import NavLinks from "./components/NavLinks";
import TransactionIcon from "../../../assets/svgs/TransactionIcon";
import BusinessIcon from "../../../assets/svgs/BusinessIcon";
import SettiingsIcon from "../../../assets/svgs/SettingsIcon";
import LogOutIcon from "../../../assets/svgs/LogOutIcon";
import ActivityLogIcon from "../../../assets/svgs/ActivityLogIcon";
import AdminNameIcon from "../../../assets/svgs/AdminNameIcon";
import DropDownArrowIcon from "../../../assets/svgs/DropDownArrowIcon";
import HrLine from "../../../assets/svgs/HrLine";
import PersonalCard from "../../../assets/svgs/PersonalCard";
import LogoutComp from "./components/LogoutComp";

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
    border: "none"
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
    boxSizing: "border-box",
    paddingLeft: "24px",
    paddingRight: "24px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    borderBottom: "0.4px solid rgb(249, 250, 250)",
  };
});

const Content = styled(Container)(() => {

  return {
    padding: "24px",
    margin: "0px !important",
    boxSizing: "border-box",
    width: "100%",
    maxWidth: "none",
  }
})

export default function DashboardLayout() {
  let [logoutModal, setLogoutModal] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0px !important",
        padding: "0px !important",
        display: "flex !important", // Flex layout to handle sidebar + content
      }}
    >
      <NavLinkDrawer variant="permanent" margin="0px">
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
                <PersonalCard />
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
        <HrLine style={{ width: "100%" }} />
        <NavLinksBox sx={{ mt: "10px", gap: "10px" }}>
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
                setLogoutModal(true)
              }}
            />
        </NavLinksBox>
      </NavLinkDrawer>

      {/* Content area, adjusted to leave space for sidebar */}
      <Box
        sx={{
          paddingLeft: "260px", // Ensure enough space for the drawer
          width: "calc(100vw - 260px)", // Prevent overflow
          height: "100%",
        }}
      >
        <AdminIconBox>
          <Box
            height={"32px"}
            width={"auto"}
            display={"flex"}
            alignItems={"center"}
            gap={"10px"}
          >
            <AdminNameIcon style={{ width: "32px", height: "32px" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px"}}>
              <Typography width={"fit-content"} height={"18px"}>
                Admin Name
              </Typography>
              <DropDownArrowIcon
                style={{ width: "12.73px", height: "7.78px" }}
              />
            </Box>
          </Box>
        </AdminIconBox>
        <Content>
        <Outlet />
        </Content>
      </Box>
      {/* log out modal */}
      <LogoutComp isModalOpen={logoutModal} setModalState={setLogoutModal}/>
    </Box>
  );
}
