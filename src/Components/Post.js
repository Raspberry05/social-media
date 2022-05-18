import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Link from "@mui/material/Link";
import { Link as LinkWrapper, useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "../Components/Avatar";
import { baseurl } from "../utils";

export const Post = ({ data }) => {
  const [post] = data?.posts;
  const navigate = useNavigate();

  return (
    <div id={data.username}>
      <Card sx={{ mx: 1, my: 2 }}>
        <CardHeader
          avatar={
            <Link
              underline="none"
              color="inherit"
              component={LinkWrapper}
              to={`${baseurl}/profile/${data.username}`}
            >
              <Avatar username={data?.username} />
            </Link>
          }
          title={
            <Link
              underline="none"
              color="inherit"
              component={LinkWrapper}
              to={`${baseurl}/profile/${data.username}`}
            >
              <Typography>@{data.username}</Typography>{" "}
            </Link>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
        />
        <CardMedia>
          <img
            src={post?.image}
            style={{ height: 400, width: "100%", objectFit: "cover" }}
            alt=""
          />
        </CardMedia>
        <CardActions disableSpacing sx={{ pb: 0 }}>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              navigate(`${baseurl}/comments`, { state: post?.comments })
            }
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>

        <CardContent sx={{ py: 0 }}>
          <Typography variant="caption" color="text.secondary" fontWeight={700}>
            {post?.likes} likes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.description}
          </Typography>

          <Link
            component={LinkWrapper}
            variant="caption"
            color="text.secondary"
            to="/comments"
            state={post?.comments}
          >
            View all {post.comments_count} comments
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
