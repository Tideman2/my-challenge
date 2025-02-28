import { Typography, styled, Box, Container, Button } from "@mui/material";

let UserWelComeComponent = styled(Typography)(() => {
  return {
    fontWeight: "bold",
    width: "235px",
    height: "30px",
    fontSize: "24px",
  };
});

const AddNewBusinessButton = styled(Button)(() => ({
    all: "unset", 
    cursor: "pointer", 
    display: "flex", 
    width: "169px",
    height: "48px",
    borderRadius: "4px",
    backgroundColor: "#2D75B6",    
    fontSize: "14px",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  }));
  

export default function Businesses() {
  return (
    <Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        sx={{
          boxSizing: "border-box",
        }}
      >
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <UserWelComeComponent>Businesse</UserWelComeComponent>
          {/* <SearchInput /> */}
        </Box>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <AddNewBusinessButton>Add new business</AddNewBusinessButton>
           {/* <ExportCsv /> */}
          <p>Export ccsv and nei</p>
        </Box>
      </Box>
    </Box>
  );
}
