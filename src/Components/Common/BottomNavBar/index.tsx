import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  DashboardSharp,
  Assessment,
  Settings as SettingsIcon,
} from "@material-ui/icons";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
      display: "none",
      backgroundColor: "#fff",
    },
    iconButton: {
      color: "#4b5563",
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -14,
      left: 0,
      right: 0,
      margin: "0 auto",
      backgroundColor: "#8f8f8f",
      color: "#fff",
    },
  })
);

interface BottomNavBarProps {
  toggleRecordModal: (value: boolean) => void;
}

const BottomNavBar = (props: BottomNavBarProps) => {
  const classes = useStyles();
  const history = useHistory();
  const { toggleRecordModal } = props;

  const navigateTo = (path: string) => {
    history.push(path);
  };

  return (
    <div>
      <AppBar position="fixed" className={`${classes.appBar} bottom-app-bar`}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={() => navigateTo("/")}
          >
            <DashboardSharp />
          </IconButton>
          <Fab
            aria-label="add"
            className={classes.fabButton}
            onClick={() => toggleRecordModal(true)}
          >
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton
            className={classes.iconButton}
            onClick={() => navigateTo("/transaction")}
          >
            <Assessment />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default BottomNavBar;
