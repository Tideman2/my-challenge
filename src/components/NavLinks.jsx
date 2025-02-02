import {  Typography, IconButton } from "@mui/material";


function NavLinks({iconView, title, callback}) {

     return (
        <IconButton sx={{
            width: `100%`,
            backgroundColor: `#4A72A3`,
            color: `white`,
            borderRadius: 0,
            "&:hover": { backgroundColor: "#4A72A3" },
          }} onClick={callback}>
             {iconView}
             <Typography sx={{marginLeft: 2}}>{title}</Typography>
          </IconButton>
     )
}

export default NavLinks