import { styled, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import TablePaginationBox from "../../../components/TablePaginationBox";

let TableContainer = styled(Box)(() => {
  return {
    width: "100%",
    height: "auto", //592px
    backgroundColor: "white",
    marginTop: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };
});

let dataGridSx = {
  borderLeft: "none",
  borderRight: "none",
  width: "100%",
  "& .MuiDataGrid-cell": {
    display: "flex",
    overflow: "visible",
    padding: "0px !important", // Remove unnecessary padding
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none", // Removes focus outline
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none", // Ensures no focus inside
  },
  "& .MuiDataGrid-columnHeader": {
    overflow: "visible !important",
  },
  "& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle": {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1A1C1F",
  },
  "& .MuiDataGrid-columnHeader:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-columnSeparator": {
    // Removes the line between headers
    display: "none !important",
  },
};

export default function ActivityTable({  columnsInTable, rowsInTable }) {
  const [row, setRows] = useState(rowsInTable);
  let [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });


  function handlePageChange(event, value) {
    setPaginationModel((prev) => {
      return { ...prev, page: value };
    });
  }

  let paginatedRows = row.slice(
    (paginationModel.page - 1) * paginationModel.pageSize,
    paginationModel.page * paginationModel.pageSize
  );

  const totalRows = row.length;
  const start = (paginationModel.page - 1) * paginationModel.pageSize + 1;
  const end = Math.min(
    paginationModel.page * paginationModel.pageSize,
    totalRows
  );

  return (
    <TableContainer>
      <Box display={"flex"} flexDirection={"column"}>
        <DataGrid
          rows={paginatedRows}
          columns={columnsInTable}
          pageSize={paginationModel.pageSize}
          paginationMode="client"
          hideFooterPagination
          hideFooter
          checkboxSelection
          disableRowSelectionOnClick
          isCellEditable={() => {
            return false;
          }}
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          sx={dataGridSx}
        />
      </Box>
      <TablePaginationBox
        start={start}
        end={end}
        onPageChange={handlePageChange}
        totalRows={totalRows}
        paginationModel={paginationModel}
      />
    </TableContainer>
  );
}
