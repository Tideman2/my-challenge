import { Dialog, styled, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  moreDetailsViewInActive,
  withdrawDetailsViewActive,
} from "../../../reduxStore/features/business";
import { moreDetailsColumns, moreDetailsRows } from "../../../data/moreDetails";
import DetailsTable from "../../../components/detailsTable/DetailsTable";
import TimesIcon from "../../../assets/svgs/TimesIcon";

const BackIconBox = styled(Box)(() => {
  return {
    width: "100%",
    height: "82px",
    boxSizing: "border-box",
    paddingLeft: "30px",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "0.4px solid rgb(249, 250, 250)",
  };
});

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "fit-content",
    height: "30px",
    fontSize: "24px",
    marginBottom: "20px",
  };
});

let BackIconWrapper = styled(Box)(() => {
  return {
    width: "32px",
    height: "32px",
    backgroundColor: "#F6F7F9",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

export default function BusinessMoreDetailsView() {
  let dispatch = useDispatch();
  let [isDialogOpen, setDialog] = useState(false);

  useEffect(() => {
    setDialog(true);
  }, []);

  function onDialogClose() {
    setDialog(false);
    dispatch(moreDetailsViewInActive());
    dispatch(withdrawDetailsViewActive());
  }

  

  return (
    <Dialog fullScreen open={isDialogOpen} onClose={onDialogClose}>
      <Box sx={{ padding: "20px" }}>
        <BackIconBox>
          <UserWelComeComponent>#199-238-2953</UserWelComeComponent>
          <BackIconWrapper onClick={onDialogClose}>
            <TimesIcon
              style={{ width: "9.6px", height: "9.6px", color: "#6C7884" }}
            />
          </BackIconWrapper>
        </BackIconBox>
         <Box sx={{marginLeft: "30px", marginRight: "30px"}}>
         <Typography sx={{ fontSize: "24px", fontWeight: "bold", mt: 3, mb: 5 }}>
          Total Amount : ₦4,000,000.00
        </Typography>
        <DetailsTable columns={moreDetailsColumns} rows={moreDetailsRows} />
         </Box>
      </Box>
    </Dialog>
  );
}
