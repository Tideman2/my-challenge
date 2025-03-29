import { Box } from "@mui/material";

export let activityLogColumns = [
  {
    field: "name",
    headerName: "NAME",
    flex: 1,
    renderCell: (params) => {
      <Box sx={{ width: "150px" }}>{params.row.name}</Box>;
    },
  },
  {
    field: "actionDetails",
    headerName: "ACTION DETAILS",
    flex: 2,
    renderCell: (params) => {
      <Box sx={{ width: "387px" }}>{params.row.actionDetails}</Box>;
    },
  },
  {
    field: "dateTime",
    headerName: "DATE & TIME",
    flex: 0.5,
    renderCell: (params) => {
      <Box sx={{ width: "150px" }}>{params.row.dateTime}</Box>;
    },
  },
];

export let activityLogRow = [
  {
    id: 1,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Assigned Z@gmail.com a Customer representative role",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 2,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Changed password",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 3,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Changed password",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 4,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Signed in",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 5,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Assigned Z@gmail.com a Customer representative role",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 6,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Assigned Z@gmail.com a Customer representative role",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 7,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Changed role",
    dateTime: "2025-02-17 10:30",
  },
  {
    id: 8,
    name: "Temidayo Oluwaniyi",
    actionDetails: "Assigned Z@gmail.com a Customer representative role",
    dateTime: "2025-02-17 10:30",
  },
];
