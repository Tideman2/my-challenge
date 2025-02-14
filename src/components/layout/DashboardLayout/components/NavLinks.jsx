import { Typography, Box, styled } from "@mui/material";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import menuItemsToRoute from "../navUtils/menuItemsToRoutes";
import styles from "./navlinkstyle.module.css";

let MenuBox = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "90px",
    marginLeft: "25%",
    gap: "4px",
    justifyContent: "space-around",
  };
});

function NavLinks({ iconView, title, toUrl, menuItems, ...rests }) {
  const location = useLocation();
  let [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith(toUrl) && menuItems) {
      setIsMenu(true);
    }

    return () => {
      setIsMenu(false);
    };
  }, [location.pathname]);

  function formatMenuItemsToRoutes() {
    let routes = [];
    for (let i = 0; i < menuItems.length; i++) {
      let route = toUrl + `/${menuItemsToRoute(menuItems[i])}`;
      routes.push(route);
    }
    console.log(routes);
    console.log(menuItems);

    return routes;
  }

  let routesToMenuItems = menuItems && formatMenuItemsToRoutes();

  return (
    <>
      <NavLink
        {...rests}
        to={toUrl}
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.inactiveLink
        }
      >
        <Box sx={{ marginLeft: 3 }}>{iconView}</Box>
        <Typography sx={{ marginLeft: 2, fontSize: 14 }}>{title}</Typography>
      </NavLink>
      {isMenu && (
        <MenuBox>
          {menuItems.map((items, index) => {
            return (
              <NavLink
                key={index}
                to={routesToMenuItems[index]}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#2D75B6" : "#50555E", // Active and inactive colors
                })}
              >
              {items}
              </NavLink>
            );
          })}
        </MenuBox>
      )}
    </>
  );
}

export default NavLinks;
