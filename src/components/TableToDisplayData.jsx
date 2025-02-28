import { styled, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

import {
  businessDetailsCol,
  businessDetailsRow,
} from "../data/businessDetails";
import Btns from "./Btns";
import ThreeDotIcon from "../assets/svgs/ThreeDotIcon";
import MoreDetails from "./MoreDetails";
import TablePaginationBox from "./TablePaginationBox";

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

export default function TableToDisplayData({ moreDetailsAction }) {
  const [row, setRows] = useState(businessDetailsRow);
  let [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  const columns = [
    ...businessDetailsCol,
    {
      field: "action",
      headerName: "",
      renderCell: (params) => (
        <Box sx={{ position: "relative", overflow: "visible" }}>
          {params.row.isMore ? (
            <MoreDetails
              onClick={(e) => {
                e.stopPropagation();
                moreDetailsAction(params);
              }}
            />
          ) : (
            <ThreeDotIcon />
          )}
        </Box>
      ),
      minWidth: 80,
      flex: 0.5,
    },
  ];

  // let paginationRenderItemCb = (item) => {
  //   if (item.type === "previous") {
  //     return <Btns {...item}>Prev</Btns>;
  //   }

  //   if (item.type === "next") {
  //     return <Btns {...item}>Next</Btns>;
  //   }

  //   if (item.type === "page" && item.page === paginationModel.page) {
  //     return <Btns {...item}>{`Page ${item.page}`}</Btns>;
  //   }

  //   return null;
  // }

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
          columns={columns}
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

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          width: "auto",
          height: "56px",
        }}
      >
        <Typography>{`${start}–${end} of ${totalRows}`}</Typography>
        <Pagination
          count={Math.ceil(totalRows / paginationModel.pageSize)}
          page={paginationModel.page}
          onChange={handlePageChange}
          renderItem={paginationRenderItemCb}
        />
      </Box> */}
    </TableContainer>
  );
}
