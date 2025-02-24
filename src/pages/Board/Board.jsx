import { Typography, styled, Box, } from "@mui/material"

import BusinesePaymentCard from "./components/BusinesePaymentCard"
import paymentSummary from "../../assets/dummydatas/paymentSummary"
import TableToDisplayData from "./components/TableToDisplayData"

let UserWelComeComponent = styled(Typography)(() => {
    return {
      fontWeight: "bold",
      width: "235px",
      height: "30px",
      fontSize: "24px"
    }
})

let FourBoxContainer = styled(Box)(() => {
    return {
       width: "1112px",
       height: "112px",
       boxSizing: "border-box",
       marginTop: "20px",
       display: "flex",
       justifyContent: "space-between"
    }
})



export default function Board() {

    return (
         <>
          <UserWelComeComponent>
            Welcome back josh,
          </UserWelComeComponent>
          <FourBoxContainer>
           {paymentSummary.map((payment, index) => {
            return (
              <BusinesePaymentCard key={payment+index} label={payment.title} value={payment.value}/>
            )
           })}
          </FourBoxContainer>
          <TableToDisplayData />
         </>
    )
}