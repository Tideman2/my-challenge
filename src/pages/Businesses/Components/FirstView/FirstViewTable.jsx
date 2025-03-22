import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Box, styled, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import {
  businesseFirstViewRows,
  businessFirstViewColumns,
} from "../../../../data/businessFirstViewTableData";
import ThreeDotIcon from "../../../../assets/svgs/ThreeDotIcon";
import TablePaginationBox from "../../../../components/TablePaginationBox";
import FirstViewMoreDetailsBtns from "./FirstViewMoreDetailsBtns";
import {
  withdrawDetailsViewActive,
  firstViewInActive,
  generateApiViewActive
} from "../../../../reduxStore/features/business";

let TableContainer = styled(Box)(() => {
  return {
    width: "100%",
    height: "auto", //592px
    backgroundColor: "white",
    marginTop: "20px",
    boxSizing: "border-box",
    display: "flex",
    overflow: "visible",
    flexDirection: "column",
  };
});

let MoreDetailsBox = styled(Stack)(() => {
  return {
    position: "absolute",
    width: "auto",
    height: "auto",
    padding: "0px",
    left: "-140px",
    backgroundColor: "white",
    boxShadow: "0px 1px 3px 0px #00000014",
    zIndex: 10,
    borderRadius: "4px",
  };
});

let CellBox = styled(Box)(() => {
  return {
    position: "relative",
    overflow: "visible",
    width: "100%",
    padding: "5px",
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

export default function FirstViewTable() {
  let dispatch = useDispatch();
  const [row, setRows] = useState(businesseFirstViewRows);
  let [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 10,
  });

  //function for mui datagrid component onCellclick prop
  function HandleCellClick(params) {
    if (params.field !== "action") return;
    setRows((prev) =>
      prev.map((row) =>
        row.id === params.id ? { ...row, isMore: !row.isMore } : row
      )
    );
  }

  //function for mui pagination component onChnage prop
  function handlePageChange(event, value) {
    setPaginationModel((prev) => {
      return { ...prev, page: value };
    });
  }

  //using redux to manage view of business route
  function onViewWithdrawDetailsClick(event) {
    event.stopPropagation();
    dispatch(firstViewInActive());
    dispatch(withdrawDetailsViewActive());
  }

  let columns = [
    ...businessFirstViewColumns,
    {
      field: "action",
      headerName: "",
      renderCell: (params) => (
        <CellBox>
          {params.row.isMore ? (
            <MoreDetailsBox>
              <FirstViewMoreDetailsBtns
                onClick={(event) => {
                  onViewWithdrawDetailsClick(event);
                }}
              >
                View withdrawal details
              </FirstViewMoreDetailsBtns>
              <FirstViewMoreDetailsBtns
                onClick={(event) => {
                  event.stopPropagation()
                  dispatch(generateApiViewActive())
                }}
                sx={{ justifyContent: "start", marginLeft: "15px" }}
              >
                Generate Api key
              </FirstViewMoreDetailsBtns>
            </MoreDetailsBox>
          ) : (
            <Box>
              <ThreeDotIcon />
            </Box>
          )}
        </CellBox>
      ),
      flex: 0,
    },
  ];

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
          onCellClick={HandleCellClick}
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
