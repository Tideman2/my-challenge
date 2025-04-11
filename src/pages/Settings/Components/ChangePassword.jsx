import { Box } from "@mui/material";

import InputComponent from "../../../components/InputComponent";
import CustomBlueButton from "../../../components/CustomBlueButton";

export default function ChangePassword() {
  return (
    <Box
      sx={{
        width: "500px",
        height: "357px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: "50px",
      }}
    >
      <InputComponent
        type={"text"}
        label={"Current password"}
        placeholder={"Temidayo@Example"}
      />
      <InputComponent
        type={"text"}
        label={"New password"}
      />
        <InputComponent
        type={"text"}
        label={"Confirm password"}
      />
      <CustomBlueButton width={"100%"} height={"48px"}>
        save changes
      </CustomBlueButton>
    </Box>
  );
}
