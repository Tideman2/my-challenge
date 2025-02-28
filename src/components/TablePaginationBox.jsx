import { Pagination, Box, Typography } from "@mui/material";

import Btns from "./Btns";

export default function TablePaginationBox({
  start,
  end,
  totalRows,
  paginationModel,
  onPageChange
}) {
 
 let paginationRenderItemCb = (item) => {
     if (item.type === "previous") {
       return <Btns {...item}>Prev</Btns>;
     }
 
     if (item.type === "next") {
       return <Btns {...item}>Next</Btns>;
     }
 
     if (item.type === "page" && item.page === paginationModel.page) {
       return <Btns {...item}>{`Page ${item.page}`}</Btns>;
     }
 
     return null;
   }   

  return (
    <Box
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
        onChange={(event, value) => {onPageChange(event, value)}}
        renderItem={paginationRenderItemCb}
      />
    </Box>
  );
}
