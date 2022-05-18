import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import { presidents } from "../presidents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const president = presidents.find((president) => {
    if (!pathname.split("/profile/").length > 1) return false;
    return president.username === pathname.split("/profile/")[1];
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {pathname !== "/" ? (
              <>
                <IconButton
                  onClick={() => navigate(-1)}
                  sx={{ color: "white", mr: 1 }}
                >
                  <ArrowBackIcon />
                </IconButton>
                {president?.username ? president.username : pathname}
              </>
            ) : (
              "WeThePeople"
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
