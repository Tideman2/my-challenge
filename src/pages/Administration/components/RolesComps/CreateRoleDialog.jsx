import { Dialog, styled, Box, Typography, Checkbox } from "@mui/material";

import TimesIcon from "../../../../assets/svgs/TimesIcon";
import InputComponent from "../../../../components/InputComponent";
import CustomBlueButton from "../../../../components/CustomBlueButton";

let BackIconWrapper = styled(Box)(() => {
  return {
    width: "24px",
    height: "24px",
    backgroundColor: "white",
    borderRadius: "50%",
    display: "flex",
    alignSelf: "end",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  };
});

let ContentBox = styled(Box)(() => {
  return {
    width: "412px",
    boxSizing: "border-box",
    padding: "20px",
    height: "740px",
    backgroundColor: "#FFFFFF",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
});

let PermissionsBox = styled(Box)(() => {
  return {
    width: "auto",
    height: "fit-content",
    padding: "0px",
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
  // "Can invite new member",
  // "Can remove existing member",
  // "Can create role",
  // "Can change role",
];

export default function CreateRoleDialog({ isModalOpen, onModalClose }) {
  return (
    <Dialog
      open={isModalOpen}
      onClose={onModalClose}
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "transparent",
            boxShadow: "none",
            maxWidth: "unset",
            boxSizing: "content-box",
            padding: 0,
            overflow: "visible",
          },
        },
      }}
    >
      <BackIconWrapper onClick={onModalClose}>
        <TimesIcon
          style={{ width: "7.2px", height: "7.2px", color: "#6C7884" }}
        />
      </BackIconWrapper>
      <ContentBox>
        <Typography
          textAlign={"center"}
          sx={{ fontSize: "20px", color: "#23203D", fontWeight: 600 }}
        >
          Create role
        </Typography>
        <Box width={"344px"} height={"62px"}>
          <InputComponent
            type={"text"}
            label={"What do you want to call this role?"}
            labelColor={"#1A1C1F"}
          />
        </Box>
        <PermissionsBox>
          <Typography
            sx={{ fontSize: "12px", fontWeight: 500, color: "#BABABA" }}
          >
            Permissions
          </Typography>
          <Box>
            {permissionsData.map((data, index) => {
              return (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", width: "auto" }}
                >
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "gray",
                      "&.Mui-checked": {
                        color: "#2D75B6",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      padding: "0px",
                      fontSize: "14px",
                      color: "#1A1C1F",
                      width: "auto",
                    }}
                  >
                    {data}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </PermissionsBox>
        <Box sx={{display: "flex", width: "100%", justifyContent: "center"}}>
        <CustomBlueButton
          width={"344px"}
          height={"48px"}
        >
          Create role
        </CustomBlueButton>
        </Box>
      </ContentBox>
    </Dialog>
  );
}
