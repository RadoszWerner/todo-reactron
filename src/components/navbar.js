import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ pr: "24px" }}>
          <Typography
            variant="h4"
            sx={{
              marginTop: 1,
              marginBottom: 1,
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            Todo list
          </Typography>
          <Box
            sx={{
              display: "flex",
              flex: 1,
              marginTop: 1,
              marginBottom: 1,
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            <TextField variant="filled" />
            <Button variant="filled" startIcon={<SendIcon />} maxHeight />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
