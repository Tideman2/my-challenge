import { Typography, styled, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import SearchInput from "../../../components/SearchInput";
import ExportCsv from "../../../components/ExportCsv";
import FirstViewTable from "./FirstView/FirstViewTable";
import { moreBusinessViewActive } from "../../../reduxStore/features/business";
let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "fit-content",
    height: "30px",
    fontSize: "24px",
  };
});

const AddNewBusinessButton = styled(Button)(() => ({
    all: "unset", 
    cursor: "pointer", 
    display: "flex", 
    width: "169px",
    height: "48px",
    borderRadius: "4px",
    backgroundColor: "#2D75B6",    
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  }));
  

export default function BusinessesFirstView() {
  let dispatch = useDispatch()


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
          <AddNewBusinessButton onClick={() => {dispatch(moreBusinessViewActive())}}>Add new business</AddNewBusinessButton>
           <ExportCsv />
        </Box>
      </Box>
      <FirstViewTable />
    </Box>
  );
}
