import formatNumToNaira from "../utilities/formatNumToNaira";

export let withDrawalsDetailColumns = [
    {
      field: "totalAmount",
      headerName: "TOTAL AMOUNT",
      flex: 1
    },
    {
      field: "transactionId",
      headerName: "TRANSACTION ID",
      flex: 1
    },
    {
      field: "dateAndTime",
      headerName: "DATE AND TIME",
      flex: 1
    },
  ];

  export let withDrawalsDetailRows = [
    {
        id: 1,
        totalAmount: formatNumToNaira(400000),
        transactionId: "#199-238-2939",
        dateAndTime: "2025-02-17 10:30",
        isMore: false
    },
    {
        id: 2,
        totalAmount: formatNumToNaira(250000),
        transactionId: "#299-438-2931",
        dateAndTime: "2025-02-16 12:45",
        isMore: false
    },
    {
        id: 3,
        totalAmount: formatNumToNaira(150000),
        transactionId: "#399-538-2925",
        dateAndTime: "2025-02-15 09:15",
        isMore: false
    },
    {
        id: 4,
        totalAmount: formatNumToNaira(500000),
        transactionId: "#499-638-2918",
        dateAndTime: "2025-02-14 14:20",
        isMore: false
    },
    {
        id: 5,
        totalAmount: formatNumToNaira(320000),
        transactionId: "#599-738-2903",
        dateAndTime: "2025-02-13 16:10",
        isMore: false
    },
    {
        id: 6,
        totalAmount: formatNumToNaira(280000),
        transactionId: "#699-838-2894",
        dateAndTime: "2025-02-12 18:35",
        isMore: false
    },
    {
        id: 7,
        totalAmount: formatNumToNaira(350000),
        transactionId: "#799-938-2886",
        dateAndTime: "2025-02-11 11:50",
        isMore: false
    },
    {
        id: 8,
        totalAmount: formatNumToNaira(420000),
        transactionId: "#899-038-2879",
        dateAndTime: "2025-02-10 15:00",
        isMore: false
    },
    {
        id: 9,
        totalAmount: formatNumToNaira(190000),
        transactionId: "#999-138-2867",
        dateAndTime: "2025-02-09 08:25",
        isMore: false
    },
    {
        id: 10,
        totalAmount: formatNumToNaira(275000),
        transactionId: "#109-238-2854",
        dateAndTime: "2025-02-08 10:10",
        isMore: false
    },
    {
        id: 11,
        totalAmount: formatNumToNaira(600000),
        transactionId: "#209-338-2842",
        dateAndTime: "2025-02-07 20:40",
        isMore: false
    },
    {
        id: 12,
        totalAmount: formatNumToNaira(470000),
        transactionId: "#309-438-2831",
        dateAndTime: "2025-02-06 07:05",
        isMore: false
    },
    {
        id: 13,
        totalAmount: formatNumToNaira(530000),
        transactionId: "#409-538-2827",
        dateAndTime: "2025-02-05 22:30",
        isMore: false
    },
    {
        id: 14,
        totalAmount: formatNumToNaira(150000),
        transactionId: "#509-638-2814",
        dateAndTime: "2025-02-04 13:15",
        isMore: false
    }
];
