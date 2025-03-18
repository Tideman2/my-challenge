import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BusinessesFirstView from "./Components/BusinesseFirstView";
import WithdrawDetailsView from "./Components/WithdrawDetailsView";
import BusinessMoreDetailsView from "./Components/BusinessMoreDetailsView";
import { firstViewActive } from "../../reduxStore/features/business";
import AddNewBusinesses from "./Components/addNewBusiness/AddNewBusinesse";
import ApiModal from "./Components/ApiModal";

export default function Businesses() {
  let dispatch = useDispatch();
  let firstView = useSelector((state) => state.businesseReducer.firstView);
  let withdrawView = useSelector((state) => state.businesseReducer.withdrawDetailsView);
  let moreDetailsView = useSelector((state) => state.businesseReducer.moreDetailsView);
  let businessModalView = useSelector((state) => state.businesseReducer.moreBusinessView);
  let apiModalView = useSelector((state) => state.businesseReducer.generateApiView);

    useEffect(() => {
    dispatch(firstViewActive())
  }, []); 

  return <Box>
    {firstView && <BusinessesFirstView />}
    {withdrawView && <WithdrawDetailsView />}
    {moreDetailsView && <BusinessMoreDetailsView />}
    {businessModalView && <AddNewBusinesses />}
    {apiModalView && <ApiModal />}
  </Box>;
}
