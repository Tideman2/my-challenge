import { Box, styled, Typography } from "@mui/material";

import CustomBlueButton from "../../../../components/CustomBlueButton";
import MarkIcon from "../../../../assets/svgs/MarkIcon";

let ContentBox = styled(Box)(() => {
  return {
    width: "412px",
    boxSizing: "border-box",
    padding: "30px",
    height: "536px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  };
});

let PermissionsBox = styled(Box)(() => {
  return {
    height: "auto",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };
});

let PermissonText = styled(Typography)(() => {
  return {
    width: "auto",
    fontWeight: 400,
    fontSize: "14px",
    color: "#1A1C1F",
  };
});

let permissionsData = [
  "Can view transaction",
  "Can export transaction",
  "Can view businesses",
  "Can generate Api",
  "Can view withdraw details",
  "Can add new business",
  "Can export businesses",
  "Can invite new member",
  "Can remove existing member",
  "Can create role",
  "Can change role",
];

export default function Permissions() {
  return (
    <ContentBox>
      <Typography
        textAlign={"center"}
        sx={{ fontSize: "20px", color: "#23203D", fontWeight: "bold" }}
      >
        Admins Permissions
      </Typography>
      <PermissionsBox>
        {permissionsData.map((permission, index) => {
          return (
            <Box
              key={index}
              sx={{
                padding: "0px",
                width: "fit-content",
                display: "flex",
                alignItems: "center"
              }}
            >
              <MarkIcon
                style={{ width: "12px", height: "12px", marginRight: "10px" }}
              />
              <PermissonText>{permission}</PermissonText>
            </Box>
          );
        })}
      </PermissionsBox>
    </ContentBox>
  );
}
