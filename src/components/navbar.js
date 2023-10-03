import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = ({ children }) => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ pr: "24px", display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h4"
            sx={{
              marginTop: 1,
              marginBottom: 1,
              marginRight: 2,
            }}
          >
            Todo list
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {children}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
