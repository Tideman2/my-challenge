import { Box } from "@mui/material";
import PropTypes from 'prop-types';

export default function Panel(props) {
  let { children, value, index, ...other } = props;

  return (
    <Box
      sx={{
        visibility: value === index ? "visible" : "hidden",
      }}
      {...other}
    >
    {value === index && children}
    </Box>
  );
}

Panel.propTypes = {
    children: PropTypes.node, //any elemnt that can be rendered
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
