import { Box, Typography, styled } from "@mui/material"

let TopText = styled(Typography)(() => {
   return {
    width: "auto",
    height: "18px",
    color: "#7C7A78",
    fontSize: "14px"
   }
})

let BottomText = styled(Typography)(() => {
    return {
     width: "auto",
     height: "18px",
     color: "#213336CC",
     fontSize: "16px"
    }
 })


export default function FourItems({onTop, underBottom}) {
   
    return (
        <Box sx={{
            width: "205px",
            height: "44px",
            display: "flex",
            flexDirection: "column",
            gap: "5px"
        }}>
         <TopText>{onTop}</TopText>
         <BottomText>{underBottom}</BottomText>
        </Box>
    )
}