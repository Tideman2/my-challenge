import { Button, Box, Typography, styled } from "@mui/material";
import { useDispatch } from "react-redux";

import ExportCsv from "../../../../components/ExportCsv";
import DropDownArrowIcon from "../../../../assets/svgs/DropDownArrowIcon";
import DetailsTable from "../../../../components/detailsTable/DetailsTable";
import { moreDetailsColumns, moreDetailsRows } from "../../../../data/moreDetails";
import { transctionShowDetailsInActive } from "../../../../reduxStore/features/transaction";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "173px",
    height: "30px",
    fontSize: "24px",
    color: "#1A1C1F",
  };
});

let BackButton = styled(Button)(({ theme }) => ({
  width: "89px",
  height: "29px",
  fontSize: "14px",
  backgroundColor: "#FAFAFA",
  color: "#000000",
  textTransform: "none",
  padding: "20px",
}));

export default function () {
  let dispatch = useDispatch();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <UserWelComeComponent>#199-238-2953</UserWelComeComponent>
        <ExportCsv />
      </Box>
      <BackButton
        startIcon={
          <DropDownArrowIcon
            rotation={-270}
            style={{ width: "17px", height: "17px" }}
          />
        }
        onClick={() => {
          dispatch(transctionShowDetailsInActive())
        }}
      >
        Back
      </BackButton>
      <Typography sx={{ fontSize: "24px", fontWeight: "Bold", mt: 3 }}>
        Total Amount : ₦4,000,000.00
      </Typography>
       <DetailsTable columns={moreDetailsColumns} rows={moreDetailsRows}/>
    </Box>
  );
}
