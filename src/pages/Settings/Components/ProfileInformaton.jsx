import { Box } from "@mui/material";

import InputComponent from "../../../components/InputComponent";

export default function ProfileInformation() {
  return (
    <Box
      sx={{
        width: "500px",
        height: "277px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: "50px",
      }}
    >
      <InputComponent
        type={"text"}
        label={"Full name"}
        placeholder={"Temidayo oluwaini"}
      />
      <InputComponent
        type={"text"}
        label={"Email address"}
        placeholder={"Temidayooluwaini@gmail.com"}
      />
      <InputComponent type={"text"} label={"Role"} placeholder={"Admin"} />
    </Box>
  );
}
