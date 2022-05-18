import * as React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Comments, Dashboard, Profile } from "./Pages/";
import { NavBar } from "./Components/NavBar";
import { Box } from "@mui/system";
import { baseurl } from "./utils";

export const Routes = () => {
  return (
    <>
      <NavBar />

      <Box sx={{ mt: 8 }}>
        <Router>
          <Route exact path={`${baseurl}/`} element={<Dashboard />} />
          <Route exact path={`${baseurl}/comments`} element={<Comments />} />
          <Route
            exact
            path={`${baseurl}/profile/:username`}
            element={<Profile />}
          />
        </Router>
      </Box>
    </>
  );
};
