import { Box, styled, Typography } from "@mui/material";
import SuccessIcon from "../components/SuccessIcon";
import RetryIcon from "../assets/svgs/RetryIcon";

let CellsBox = styled(Box)(() => ({
    width: "162px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

let CellsText = styled(Typography)(() => ({
  color: "#1A1C1F",
  fontSize: "14px",
}));

export let administrationTeamMateCols = [
  {
    field: "fullName",
    headerName: "FULL NAME",
    flex: 1,
    renderCell: (params) => (
      <CellsBox>
        {params.row.inviteSent ? (
          <SuccessIcon>Invite sent</SuccessIcon>
        ) : (
          <CellsText>{params.row.fullName}</CellsText>
        )}
      </CellsBox>
    ),
  },
  {
    field: "email",
    headerName: "EMAIL",
    flex: 1,
  },
  {
    field: "role",
    headerName: "ROLE",
    flex: 1,
    renderCell: (params) => (
        <CellsBox>
            <CellsText>{params.row.role}</CellsText>
        </CellsBox>
    )
  },
  {
    field: "resendInvite",
    flex: 1,
    headerName: "",
    renderCell: (params) => (
      <CellsBox>
        {params.row.inviteSent && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "3px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <RetryIcon style={{height: "16px", width: "16px"}}/>
            <CellsText>Resend Invite</CellsText>
          </Box>
        )}
      </CellsBox>
    ),
  },
];

function generateRandomRows() {
  const baseRow = {
    fullName: "Temidayo Oluwaniyi",
    email: "t.oluwaniyi@gmail.com",
    role: "admin",
  };

  return Array.from({ length: 15 }, (_, index) => ({
    id: index + 2,
    inviteSent: Math.random() < 0.5, // Random true/false
    ...baseRow,
  }));
}

export let administrationTeamMateRows = [
  {
    id: 1,
    inviteSent: true,
    fullName: "Temidayo Oluwaniyi",
    email: "t.oluwaniyi@gmail.com",
    role: "admin",
  },
  ...generateRandomRows(),
];
