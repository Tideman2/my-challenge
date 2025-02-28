import { Typography, styled, Box, Container } from "@mui/material";
import { useState } from "react";

import SearchInput from "./Components/SearchInput";
import SelectDateDropdown from "./Components/SelectDateDropdown";
import ExportCsv from "../../components/ExportCsv";
import TableToDisplayData from "../../components/TableToDisplayData";
import MoreDetailsTable from "./Components/moreDetailsComp/MoreDetailsTable";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "154px",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
  };
});

export default function Transaction() {
  let [moreDetailsActive, setMoreDetailsActive] = useState(false);

  return (
      <Box width={"calc(100vw - 310px)"}>
        {moreDetailsActive? (
         <MoreDetailsTable detailsActive={setMoreDetailsActive}/>
        ) : (
          <>
          <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"100%"}
          sx={{
            boxSizing: "border-box",
          }}
        >
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <UserWelComeComponent>Transactions</UserWelComeComponent>
            <SearchInput />
          </Box>
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <SelectDateDropdown />
            <ExportCsv />
          </Box>
        </Box>
        <TableToDisplayData moreDetailsAction={() => {setMoreDetailsActive(true)}} />
          </>
        )}
      </Box>
   
  );
}
