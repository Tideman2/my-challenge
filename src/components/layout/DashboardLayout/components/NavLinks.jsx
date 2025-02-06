import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

import styles from "./navlinkstyle.module.css";

function NavLinks({ iconView, title, toUrl, ...rests }) {
  return (
    <NavLink
      {...rests}
      to={toUrl}
      end
      className={({ isActive }) => (isActive ? styles.activeLink : styles.inactiveLink)}
    >
      <Box sx={{ marginLeft: 3 }}>{iconView}</Box>
      <Typography sx={{ marginLeft: 2, fontSize: 14 }}>{title}</Typography>
    </NavLink>
  );
}

export default NavLinks;
