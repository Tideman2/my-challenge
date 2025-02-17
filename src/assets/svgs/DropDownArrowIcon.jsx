import SvgIcon from "@mui/material/SvgIcon";

export default function DropDownArrowIcon({ rotation = 0, ...props }) {
  return (
    <SvgIcon
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform={`rotate(${rotation}, 7, 4)`}>
        <path
          d="M7.00072 5.17266L11.9507 0.222656L13.3647 1.63666L7.00072 8.00066L0.636719 1.63666L2.05072 0.222656L7.00072 5.17266Z"
          fill="#394E51"
        />
      </g>
    </SvgIcon>
  );
}
