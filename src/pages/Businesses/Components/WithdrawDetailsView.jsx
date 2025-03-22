import { Typography, styled, Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";

import {
  withdrawDetailsViewInActive,
  firstViewActive,
  moreDetailsViewActive
} from "../../../reduxStore/features/business";
import DropDownArrowIcon from "../../../assets/svgs/DropDownArrowIcon";
import FourItems from "./withdrawDetails/FourItems";
import TableToDisplayData from "../../../components/TableToDisplayData";
import {
  withDrawalsDetailColumns,
  withDrawalsDetailRows,
} from "../../../data/withdrawals";

let itemsToPutInFourContaier = [
  { top: "Business Address", bottom: "6, Saki Close, Ikeja, Lagos." },
  { top: "Contact’s Name", bottom: "Edward Ariyo" },
  { top: "Contact’s Email", bottom: "Eddy@gmail.com" },
  { top: "Contact’s Phone No", bottom: "0812 345 6098" },
];

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "fit-content",
    height: "30px",
    fontSize: "24px",
    marginBottom: "20px",
  };
});

let BackButton = styled(Button)(() => ({
  width: "89px",
  height: "29px",
  fontSize: "14px",
  backgroundColor: "#FAFAFA",
  color: "#000000",
  textTransform: "none",
  padding: "20px",
}));

let FourItemsContainer = styled(Box)(() => {
  return {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "1116px",
    height: "108px",
    backgroundColor: "#FAFAFA",
    marginTop: "30px",
    marginBottom: "30px",
  };
});

export default function WithdrawDetailsView() {
  let dispatch = useDispatch();

  function handleBackClick() {
    dispatch(firstViewActive());
    dispatch(withdrawDetailsViewInActive());
  }

  function handleMoreDetailsAction() {
    dispatch(withdrawDetailsViewInActive())
    dispatch(moreDetailsViewActive())
  }

  return (
    <Box>
      <Box>
        <UserWelComeComponent>Perry Holdings</UserWelComeComponent>
        <BackButton
          startIcon={
            <DropDownArrowIcon
              rotation={-270}
              style={{ width: "17px", height: "17px" }}
            />
          }
          onClick={handleBackClick}
        >
          Back
        </BackButton>
      </Box>
      <FourItemsContainer>
        {itemsToPutInFourContaier.map((item, i) => {
          return (
            <FourItems key={i} onTop={item.top} underBottom={item.bottom} />
          );
        })}
      </FourItemsContainer>
      <UserWelComeComponent>Transactions</UserWelComeComponent>
      <TableToDisplayData
        moreDetailsAction={handleMoreDetailsAction}
        rowsInTable={withDrawalsDetailRows}
        columnsInTable={withDrawalsDetailColumns}
      />
    </Box>
  );
}
