import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { TableChart, MonetizationOn } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../Utils/constants/routes";
import SvgIcon from "@material-ui/core/SvgIcon";

interface SideBarProps {
  setShowSidebar: any;
  setShowAddRecord: any;
  showSidebar: boolean;
}

const SideBar = (props: SideBarProps) => {
  const location = useLocation();

  return (
    <div className={`side-bar ${!props.showSidebar ? "hide-menu" : ""}`}>
      <div className="logo-area">
        <MonetizationOn className="brand-logo" />
        <div className="brand-name">DIMER</div>
      </div>
      <div className="create-records">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            props.setShowAddRecord(true);
          }}
        >
          ADD RECORDS
        </Button>
      </div>
      <div className={`sidebar-menu`}>
        <List component="nav" aria-label="main mailbox folders">
          {routes.map((route) => (
            <Link to={route.path}>
              <ListItem
                button
                className={location.pathname === route.path ? "active" : ""}
              >
                <ListItemIcon>
                  <SvgIcon component={route.icon} className="svg-ic" />
                </ListItemIcon>
                <ListItemText primary={route.label} className="display-block" />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </div>
  );
};
export default SideBar;
