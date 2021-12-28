import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useSelector } from "react-redux";
import { auth } from "../../Config/firebase";
import { useHistory } from "react-router";
import SvgIcon from "@material-ui/core/SvgIcon";
import { PowerSettingsNew } from "@material-ui/icons";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const profile = useSelector((state: any) => state.user.profile);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = async () => {
    await auth.signOut();
    history.push("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="profile-image"
      >
        <img src={profile.photoURL} alt="" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <SvgIcon component={PowerSettingsNew} className="svg-ic" />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
