import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { useSelector } from "react-redux";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ProfileMenu from "../../ProfileMenu";

interface NavBarProps {
  setShowSidebar: any;
  showSidebar: boolean;
}

const NavBar = (props: NavBarProps) => {
  const { setShowSidebar, showSidebar } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const profile = useSelector((state: any) => state.user.profile);
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <div className="nav-bar">
        <span
          className="hamburger-menu"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <MenuOpenIcon />
        </span>
        <ProfileMenu />
        {/* <div
          aria-controls="simple-menu"
          aria-haspopup="true"
          className="profile-image"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <img src={profile.photoURL} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
