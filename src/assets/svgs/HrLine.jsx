import SvgIcon from "@mui/material/SvgIcon";

export default function HrLine(props) {
  return (
    <SvgIcon
      width="260"
      height="1"
      viewBox="0 0 260 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="0.5" x2="260" y2="0.5" stroke="#EBEEEF" />
    </SvgIcon>
  );
}
