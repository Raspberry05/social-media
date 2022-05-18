import { Container, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar } from "../Components/Avatar";
import { presidents } from "../presidents";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const {
    followers,
    following,
    about = "about asdfj alksdjfhlk asjhdflk jashdl asdfb akjsdf kjashgdfkj hagskjdfhg aksjdhfg kjashdgf kjhasgdfk jhasgdkfjhasgkfj halskjdh",
    name,
    posts,
  } = presidents.find((president) => president.username === username);

  return (
    <Container>
      <Grid
        container
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Avatar username={username} size={80} />
        </Grid>

        <Grid item>
          <center>
            <Typography variant="body1">1</Typography>
            <Typography variant="overline">Post</Typography>
          </center>
        </Grid>
        <Grid item>
          <center>
            <Typography variant="body1">{followers}</Typography>
            <Typography variant="overline">Followers</Typography>
          </center>
        </Grid>
        <Grid item>
          <center>
            {" "}
            <Typography variant="body1">{following}</Typography>
            <Typography variant="overline">Following</Typography>
          </center>
        </Grid>
      </Grid>

      <Grid sx={{ pt: 2 }} container flexDirection="column">
        <Typography variant="body2" fontWeight={500}>
          {name}
        </Typography>
        <Typography variant="caption">{about}</Typography>
      </Grid>

      <Grid container flexDirection="row">
        <ImageList cols={3}>
          {posts.map((post) => (
            <ImageListItem
              key={post.image}
              onClick={() => {
                navigate(`/#${username}`);
              }}
            >
              <img src={post.image} />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Container>
  );
};
