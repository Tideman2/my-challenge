import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Box, styled } from "@mui/material";

import TablePaginationBox from "../TablePaginationBox";

let TableContainer = styled(Box)(() => ({
  width: "100%",
  height: "auto",
  backgroundColor: "white",
  marginTop: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
}));

let dataGridSx = {
  borderLeft: "none",
  borderRight: "none",
  width: "100%",
  "& .MuiDataGrid-cell": {
    display: "flex",
    alignItems: "center",
    overflow: "visible",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: "0px !important",
  },
  "& .MuiDataGrid-cell:focus": {
    outline: "none",
  },
  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
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
    display: "none !important",
  },
  "& .MuiDataGrid-row:hover": {
    backgroundColor: "transparent !important", // Removes hover effect
  },
  "& .amount-header": {
    paddingLeft: "40px", //in columns
  },
};

export default function DetailsTable({columns, rows}) {
  let [activeRowId, setActiveRowId] = useState(-1);
  let [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  function handleViewMore(params) {
    setActiveRowId(activeRowId === params.row.id ? -1 : params.row.id);
  }

  function handlePageChange(event, value) {
    setPaginationModel((prev) => {
      return { ...prev, page: value };
    });
  }

  let paginatedRows = rows.slice(
    (paginationModel.page - 1) * paginationModel.pageSize,
    paginationModel.page * paginationModel.pageSize
  );

  const totalRows = rows.length;
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
          columns={columns(activeRowId, handleViewMore)}
          pageSize={5}
          paginationMode="client"
          hideFooterPagination
          hideFooter
          checkboxSelection={false}
          disableRowSelectionOnClick
          isCellEditable={() => false}
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          getRowHeight={(params) => (params.id === activeRowId ? 160 : 60)}
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
