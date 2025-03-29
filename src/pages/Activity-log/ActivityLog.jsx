import { Box, styled, Typography } from "@mui/material";

import SearchInput from "../../components/SearchInput";
import SelectDateDropdown from "../../components/SelectDateDropdown";
import ExportCsv from "../../components/ExportCsv";
import ActivityDropdown from "./Components/ActivityDropDown";
import ActivityTable from "./Components/ActivityTable";
import { activityLogColumns, activityLogRow } from "../../data/activityLogData";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "154px",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
  };
});

export default function ActivityLog() {
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
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <UserWelComeComponent>Activity log</UserWelComeComponent>
          <SearchInput />
        </Box>
        <Box display={"flex"} gap={"2px"} alignItems={"center"}>
          <ActivityDropdown />
          <SelectDateDropdown />
          <ExportCsv />
        </Box>
      </Box>
      <ActivityTable
        columnsInTable={activityLogColumns}
        rowsInTable={activityLogRow}
      />
    </Box>
  );
}
