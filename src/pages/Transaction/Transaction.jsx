import { Typography, styled, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import SearchInput from "../../components/SearchInput";
import SelectDateDropdown from "../../components/SelectDateDropdown";
import ExportCsv from "../../components/ExportCsv";
import TableToDisplayData from "../../components/TableToDisplayData";
import MoreDetailsTable from "./Components/moreDetailsComp/MoreDetailsTable";
import {
  businessDetailsCol,
  businessDetailsRow,
} from "../../data/businessDetails";
import { transctionShowDetailsActive } from "../../reduxStore/features/transaction";

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
  let dispatch = useDispatch()
  let moreDetailsActive = useSelector(
    (state) => state.transactionReducer.transctionShowDetails
  );

  return (
    <Box>
      {moreDetailsActive ? (
        <MoreDetailsTable />
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
          <TableToDisplayData
            rowsInTable={businessDetailsRow}
            columnsInTable={businessDetailsCol}
            moreDetailsAction={() => {
              dispatch(transctionShowDetailsActive())
            }}
          />
        </>
      )}
    </Box>
  );
}
