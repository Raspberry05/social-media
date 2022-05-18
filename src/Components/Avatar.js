import { Avatar as MUIAvatar } from "@mui/material";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name[0].toUpperCase()}`,
  };
}

export const Avatar = ({ username, size = 40 }) => {
  return (
    <MUIAvatar
      style={{ width: size, height: size, fontSize: 20 * (size * 0.02) }}
      {...stringAvatar(username)}
    />
  );
};
