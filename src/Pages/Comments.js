import { Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar } from "../Components/Avatar";

export const Comments = (props) => {
  const location = useLocation();

  if (!location.state) return <>There's no comments</>;

  return (
    <Box sx={{ px: 1 }} className="App">
      {location.state.map((comment, i) => (
        <Comment data={comment} key={comment.user_ref + i} />
      ))}
    </Box>
  );
};

const Comment = ({ data }) => {
  return (
    <Paper sx={{ my: 2, py: 2 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ alignSelf: "flex-start", px: 2 }}>
          <Avatar username={data.user_ref} />
        </Box>

        <Box>
          <Typography variant="caption" sx={{ pr: 1 }}>
            <b>@{data.user_ref}</b> {data.text}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
