import { Typography, Box, styled } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import DropDownArrowIcon from "../../../../assets/svgs/DropDownArrowIcon";

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

let CustomNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => {
  const sharedStyle = {
    width: "100%",
    height: "48px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  };
  const activeLink = {
    backgroundColor: "#2d75b6",
    color: "white",
    "& svg": {
      path: {
        fill: "white",
      },
    },
  };

  const inactiveLink = {
    backgroundColor: "none",
    color: "black",
  };

  return {
    ...sharedStyle,
    ...(active ? activeLink : inactiveLink),
    "&:hover": activeLink,
  };
});

let CustomSubNavLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => {
  const activeLink = {
    color: "#2D75B6",
  };

  const inactiveLink = {
    color: "#50555E",
  };

  return {
    textDecoration: "none",
    ...(active ? activeLink : inactiveLink),
    "&:hover": activeLink,
  };
});

function NavLinks({ icon, title, path, menuItems, ...rests }) {
  const location = useLocation();
  let [isMenuOpen, setMenuOpen] = useState(false);
  const hasSubMenuItems = Boolean(menuItems?.length);

  useEffect(() => {
    if (!hasSubMenuItems) {
      return;
    }

    const isOneMenuItemActive = menuItems
      .map((item) => item.path)
      .includes(location.pathname);

    setMenuOpen(isOneMenuItemActive);
  }, [location.pathname, hasSubMenuItems]);

  return (
    <>
      <CustomNavLink
        {...rests}
        to={path}
        active={hasSubMenuItems ? isMenuOpen : path === location.pathname}
        onClick={(e) => {
          if (hasSubMenuItems || rests.onClick) {
            e.preventDefault();
            if (hasSubMenuItems) {
              setMenuOpen((prev) => !prev);
            } else {
              rests.onClick();
            }
          }
        }}
      >
        <Box sx={{ marginLeft: 3 }}>{icon}</Box>
        <Typography sx={{ marginLeft: 2, fontSize: 14, marginRight: 2 }}>
          {title}
        </Typography>
        {hasSubMenuItems && (
          <DropDownArrowIcon
            style={{ width: "12.73px", height: "7.78px" }}
            rotation={isMenuOpen? 180 : 270} // Rotate if menu is open
          />
        )}
      </CustomNavLink>
      {hasSubMenuItems && isMenuOpen && (
        <MenuBox>
          {menuItems.map((item, index) => {
            return (
              <CustomSubNavLink
                key={index}
                to={item.path}
                active={item.path === location.pathname}
              >
                {item.title}
              </CustomSubNavLink>
            );
          })}
        </MenuBox>
      )}
    </>
  );
}

export default NavLinks;
