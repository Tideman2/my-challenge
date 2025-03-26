import { Typography, styled, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import SearchInput from "../../../components/SearchInput";
import ExportCsv from "../../../components/ExportCsv";
import FirstViewTable from "./FirstView/FirstViewTable";
import CustomBlueButton from "../../../components/CustomBlueButton";
import { moreBusinessViewActive } from "../../../reduxStore/features/business";
let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "fit-content",
    height: "30px",
    fontSize: "24px",
  };
});

export default function BusinessesFirstView() {
  let dispatch = useDispatch();

  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{
          boxSizing: "border-box",
        }}
      >
        <Box display={"flex"} gap={"20px"} alignItems={"center"}>
          <UserWelComeComponent>Businesse</UserWelComeComponent>
          <SearchInput />
        </Box>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <CustomBlueButton
            height={"48px"}
            width={"169px"}
            onClick={() => {
              dispatch(moreBusinessViewActive());
            }}
          >
            Add new business
          </CustomBlueButton>
          <ExportCsv />
        </Box>
      </Box>
      <FirstViewTable />
    </Box>
  );
}
