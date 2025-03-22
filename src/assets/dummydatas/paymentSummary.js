import formatNumToNaira from "../../utilities/formatNumToNaira";

let paymentSummary = [
    {
        title: "Total businese",
        value: 56
    },
    {
        title: "Total Payment",
        value: formatNumToNaira(120000000) 
    },
    {
        title: "Failed payments",
        value: formatNumToNaira(2500000)
    },
    {
        title: "Pending payments",
        value: formatNumToNaira(3200000)
    }
];


export default paymentSummary