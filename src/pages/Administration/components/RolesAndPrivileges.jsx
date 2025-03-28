import { styled, Box, Typography } from "@mui/material";
import { useState } from "react";

import SearchInput from "../../../components/SearchInput";
import CustomBlueButton from "../../../components/CustomBlueButton";
import AdminNameIcon from "../../../assets/svgs/AdminNameIcon";
import AdminDialog from "./RolesComps/AdminDialog";
import CreateRoleDialog from "./RolesComps/CreateRoleDialog";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "auto",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
  };
});

let BoxForSearchAndRoles = styled(Box)(() => {
  return {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    boxSizing: "border-box",
  };
});

let AdminAndCustomerSupportBox = styled(Box)(() => {
  return {
    width: "353px",
    height: "157px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #F1F3F6",
  };
});

let CustomText = styled(Typography)(() => {
  return {
    fontWeight: 700,
    fontSize: "16px",
    color: "#262626",
  };
});

let FaintText = styled(Typography)(() => {
  return {
    fontWeight: 400,
    fontSize: "9px",
    color: "#50555E",
  };
});

let SeePermissionsText = styled(Typography)(() => {
  return {
    fontWeight: 500,
    fontSize: "12px",
    color: "#2D75B6",
    borderBottom: "1px solid #2D75B6",
    padding: "0px",
    margin: "0px",
  };
});

let CustomBox = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
});

export default function RolesAndPrivileges() {
  let [adminModalState, setAdminModalState] = useState(false);
  let [createRoleModalState, setCreateRoleModalState] = useState(false);

  function onAdminClose() {
    setAdminModalState(false);
  }

  function onCreateClose() {
    setCreateRoleModalState(false);
  }

  return (
    <Box>
      <BoxForSearchAndRoles>
        <Box display={"flex"} gap={"30px"} alignItems={"center"}>
          <UserWelComeComponent>Roles and permission</UserWelComeComponent>
          <SearchInput />
        </Box>
        <CustomBlueButton
          width={"169px"}
          height={"48px"}
          onClick={() => {
            setCreateRoleModalState(true);
          }}
        >
          Create custom role
        </CustomBlueButton>
      </BoxForSearchAndRoles>
      <Box
        sx={{
          width: "733px",
          height: "157px",
          marginTop: "60px",
          display: "flex",
          gap: "20px",
        }}
      >
        <AdminAndCustomerSupportBox>
          <CustomBox>
            <CustomText>Admin</CustomText>
            <FaintText>Last modified at Nov 212022 at 9:30</FaintText>
          </CustomBox>
          <CustomBox>
            <AdminNameIcon style={{ width: "32px", height: "32px" }} />
            <SeePermissionsText
              onClick={() => {
                setAdminModalState(true);
              }}
            >
              See permissions
            </SeePermissionsText>
          </CustomBox>
        </AdminAndCustomerSupportBox>
        <AdminAndCustomerSupportBox>
          <CustomBox>
            <CustomText>Customer support</CustomText>
            <FaintText>Last modified at Nov 212022 at 9:30</FaintText>
          </CustomBox>
          <CustomBox>
            <AdminNameIcon style={{ width: "32px", height: "32px" }} />
            <SeePermissionsText
              onClick={() => {
                setAdminModalState(true);
              }}
            >
              See permissions
            </SeePermissionsText>
          </CustomBox>
        </AdminAndCustomerSupportBox>
      </Box>
      <AdminDialog isModalOpen={adminModalState} onModalClose={onAdminClose} />
      <CreateRoleDialog isModalOpen={createRoleModalState} onModalClose={onCreateClose} />
    </Box>
  );
}
