import * as React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Comments, Dashboard, Profile } from "./Pages/";
import { NavBar } from "./Components/NavBar";
import { Box } from "@mui/system";

export const Routes = () => {
  return (
    <>
      <NavBar />

      <Box sx={{ mt: 8 }}>
        <Router>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/comments" element={<Comments />} />
          <Route exact path="/Profile/:username" element={<Profile />} />
        </Router>
      </Box>
    </>
  );
};
