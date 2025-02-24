import { Pagination, styled, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import {
  businessDetailsCol,
  businessDetailsRow,
} from "../data/businessDetails";
import Btns from "./Btns";

let TableContainer = styled(Box)(() => {
  return {
    width: "1116px",
    height: "592px",
    backgroundColor: "white",
    marginTop: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  };
});

export default function TableToDisplayData() {
  const [row, setRows] = useState(businessDetailsRow);
  let [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  function handleActionFieldClick(params) {
    if (params.field !== "action") return;
    setRows((prev) =>
      prev.map((row) =>
        row.id === params.id ? { ...row, isMore: !row.isMore } : row
      )
    );
  }

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
          columns={businessDetailsCol}
          pageSize={paginationModel.pageSize}
          paginationMode="client"
          hideFooterPagination
          hideFooter
          onCellClick={handleActionFieldClick}
          checkboxSelection
          disableRowSelectionOnClick
          isCellEditable={() => {
            return false;
          }}
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          sx={{
            borderLeft: "none",
            borderRight: "none",
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
          }}
        />
        </Box>

      <Box sx={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         padding: "16px",
         width: "1116px",
         height: "56px",
      }}>
        <Typography>{`${start}–${end} of ${totalRows}`}</Typography>
        <Pagination
          count={Math.ceil(totalRows / paginationModel.pageSize)}
          page={paginationModel.page}
          onChange={handlePageChange}
          renderItem={(item) => {
            if (item.type === "previous") {
              console.log(item, `prev`);
              return <Btns {...item}>Prev</Btns>;
            }

            if (item.type === "next") {
              return <Btns {...item}>Next</Btns>;
            }

            if (item.type === "page" && item.page === paginationModel.page) {
              console.log(item, `page item`);
              return <Btns {...item}>{`Page ${item.page}`}</Btns>;
            }

            return null;
          }}
        />
      </Box>
    </TableContainer>
  );
}
