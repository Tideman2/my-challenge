import { styled, Typography, Box } from "@mui/material";

import formatNumToNaira from "../utilities/formatNumToNaira";
import SuccessIcon from "../components/SuccessIcon";
import CollapseText from "../pages/Transaction/Components/moreDetailsComp/Components/CollapseText";
import TextCompForMoreDetails from "../components/TextCompForMoreDetails";

let TopText = styled(Typography)(() => ({
  width: "100%",
  height: "auto",
  fontSize: "14px",
  color: "#1A1C1F",
  whiteSpace: "normal",
}));

let CellsBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "85%",
  width: "100%", // Ensures content does not overflow
}));

export let moreDetailsColumns = (activeRowId, setActiveRowId) => [
  {
    field: "description",
    headerName: "DESCRIPTION",
    renderCell: (params) => (
      <CellsBox
        sx={{
          justifyContent: activeRowId !== params.row.id && "center",
        }}
      >
        <TopText
          sx={{
            whiteSpace: activeRowId === params.row.id ? "normal" : "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {params.row.description}
        </TopText>
        {activeRowId === params.row.id && (
          <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
        )}
      </CellsBox>
    ),
    flex: 1,
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    headerClassName: "amount-header",
    renderCell: (params) => (
      <CellsBox
        sx={{
          paddingLeft: "40px",
          justifyContent: activeRowId !== params.row.id && "center",
        }}
      >
        <TopText>{params.row.amount}</TopText>
        {activeRowId === params.row.id && (
          <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
        )}
      </CellsBox>
    ),
    flex: 1,
  },
  {
    field: "dateTime",
    headerName: "DATE & TIME",
    renderCell: (params) => (
      <CellsBox
        sx={{
          justifyContent: activeRowId !== params.row.id && "center",
        }}
      >
        <TopText>{params.row.dateTime}</TopText>
        {activeRowId === params.row.id && (
          <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
        )}
      </CellsBox>
    ),
    flex: 1,
  },
  {
    field: "status",
    headerName: "STATUS",
    renderCell: (params) =>
      params.row.status ? (
        <CellsBox
          sx={{
            justifyContent: activeRowId !== params.row.id && "center",
          }}
        >
          <SuccessIcon toFailure={false} />
          {activeRowId === params.row.id && (
            <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
          )}
        </CellsBox>
      ) : (
        <CellsBox
          sx={{
            justifyContent: activeRowId !== params.row.id && "center",
          }}
        >
          <SuccessIcon toFailure={true} />
          {activeRowId === params.row.id && (
            <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
          )}
        </CellsBox>
      ),
    flex: 1,
  },
  {
    field: "collapse",
    headerName: "",

    renderCell: (params) => (
      <CellsBox
        sx={{
          justifyContent: activeRowId !== params.row.id && "center",
        }}
        onClick={() => setActiveRowId(params)}
      >
        {activeRowId === params.row.id ? (
          <CollapseText expand={false} />
        ) : (
          <CollapseText expand={true} />
        )}
        {activeRowId === params.row.id && (
          <TextCompForMoreDetails top={"top Text"} sub={"more to come"} />
        )}
      </CellsBox>
    ),
    flex: 1,
  },
];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function populateRow(data, row) {
  for (let i = row.length + 1; i < 15; i++) {
    let copy = {
      ...data,
      id: i + 1,
      status: getRandomInRange(2, 8) < 4 ? true : false,
    };
    row.push(copy);
  }
}
// More dummy data
export let moreDetailsRows = [
  {
    id: 1,
    description: "January payments from Lagos transactions",
    amount: formatNumToNaira(4000000),
    dateTime: "2025-02-17 10:30",
    status: true,
  },
  {
    id: 2,
    description: "January payments from Lagos transactions",
    amount: formatNumToNaira(2500000),
    dateTime: "2025-02-20 14:15",
    status: false,
  },
  {
    id: 3,
    description: "January payments from Lagos transactions",
    amount: formatNumToNaira(18000000),
    dateTime: "2025-03-05 09:00",
    status: true,
  },
  {
    id: 4,
    description: "January payments from Lagos transactions",
    amount: formatNumToNaira(500000),
    dateTime: "2025-04-10 16:45",
    status: true,
  },
  {
    id: 5,
    description: "January payments from Lagos transactions",
    amount: formatNumToNaira(1200000),
    dateTime: "2025-04-18 11:30",
    status: false,
  },
];

populateRow(moreDetailsRows[0], moreDetailsRows);
