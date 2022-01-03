import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import ProfileMenu from "../../ProfileMenu";

interface NavBarProps {
  setShowSidebar: any;
  showSidebar: boolean;
}

const NavBar = (props: NavBarProps) => {
  const { setShowSidebar, showSidebar } = props;
  return (
    <div className="nav-bar">
      <span
        className="hamburger-menu"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <MenuOpenIcon />
      </span>
      <ProfileMenu />
    </div>
  );
};

export default NavBar;
