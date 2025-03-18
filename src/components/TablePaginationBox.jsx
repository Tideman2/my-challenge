import { Pagination, Box, Typography } from "@mui/material";

import TablePaginationBoxBtns from "./TablePaginationBoxBtns";

export default function TablePaginationBox({
  start,
  end,
  totalRows,
  paginationModel,
  onPageChange,
}) {
  let paginationRenderItemCb = (item) => {
    if (item.type === "previous") {
      return <TablePaginationBoxBtns {...item}>Prev</TablePaginationBoxBtns>;
    }

    if (item.type === "next") {
      return <TablePaginationBoxBtns {...item}>Next</TablePaginationBoxBtns>;
    }

    if (item.type === "page" && item.page === paginationModel.page) {
      return (
        <TablePaginationBoxBtns
          {...item}
        >{`Page ${item.page}`}</TablePaginationBoxBtns>
      );
    }

    return null;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        width: "auto",
        height: "56px",
        overflow: "visible",
      }}
    >
      <Typography>{`${start}–${end} of ${totalRows}`}</Typography>
      <Pagination
        count={Math.ceil(totalRows / paginationModel.pageSize)}
        page={paginationModel.page}
        onChange={(event, value) => {
          onPageChange(event, value);
        }}
        renderItem={paginationRenderItemCb}
      />
    </Box>
  );
}
