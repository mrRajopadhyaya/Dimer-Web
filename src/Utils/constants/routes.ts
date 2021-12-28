import Dashboard from "../../Routes/Dashboard";
import Transaction from "../../Routes/Transaction";
import Settings from "../../Routes/Settings";
import {
  DashboardSharp,
  Assessment,
  Settings as SettingsIcon,
} from "@material-ui/icons";

interface RouteDetail {
  path: string;
  label: string;
  component: any;
  icon: any;
}

export const routes: RouteDetail[] = [
  {
    path: "/",
    label: "Dashboard",
    component: Dashboard,
    icon: DashboardSharp,
  },
  {
    path: "/transaction",
    label: "Transaction",
    component: Transaction,
    icon: Assessment,
  },
  // {
  //   path: "/settings",
  //   label: "Settings",
  //   component: Settings,
  //   icon: SettingsIcon,
  // },
];
