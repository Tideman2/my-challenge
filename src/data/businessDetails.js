import formatNumToNaira from "../utilities/formatNumToNaira";

export let businessDetailsCol = [
  {
    field: "businessName",
    headerName: "BUSINESS NAME",
    minWidth: 135,
    flex: 1,
  },
  { field: "totalAmount", headerName: "TOTAL AMOUNT", minWidth: 103, flex: 1 },
  {
    field: "transactionId",
    headerName: "TRANSACTION ID",
    minWidth: 105,
    flex: 1,
  },
  { field: "dateTime", headerName: "DATE & TIME", minWidth: 124, flex: 1 },
];

export let businessDetailsRow = [
  {
    id: 1,
    businessName: "Company A",
    totalAmount: formatNumToNaira(1000),
    transactionId: "T001",
    dateTime: "2025-02-17 10:30",
    isMore: false,
  },
  {
    id: 2,
    businessName: "Company B",
    totalAmount: formatNumToNaira(400000000),
    transactionId: "#199-238-2953",
    dateTime: "2025-02-17 11:00",
    isMore: false,
  },
  // Add 12 more dummy rows with isMore set to false
  ...Array.from({ length: 12 }, (v, i) => ({
    id: i + 3,
    businessName: `Company ${String.fromCharCode(65 + i)}`,
    totalAmount: formatNumToNaira(4000000 + i * 100),
    transactionId: `T00${i + 3}`,
    dateTime: `2025-02-17 ${12 + i}:00`,
    isMore: false,
  })),
];
