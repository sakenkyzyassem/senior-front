// icons
import DashboardIcon from "@material-ui/icons/BarChartOutlined";
import ProfileIcon from "@material-ui/icons/Person";
import WorkspaceIcon from "@material-ui/icons/Dashboard";
// components
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

// interface
import RouteItem from "../model/RouteItem.model";
import Workspace from "../pages/Workspace";

// define app routes
export const routes: Array<RouteItem> = [
  {
    key: "router-dashboard",
    title: "Dashboard",
    tooltip: "Dashboard",
    path: "/",
    enabled: true,
    component: Dashboard,
    icon: DashboardIcon,
    appendDivider: true,
  },
  {
    key: "router-profile",
    title: "Profile",
    tooltip: "Profile",
    path: "/profile",
    enabled: true,
    component: Profile,
    icon: ProfileIcon,
  },
  {
    key: "router-workspace",
    title: "Workspaces",
    path: "/workspace",
    enabled: true,
    component: Workspace,
    icon: WorkspaceIcon,
  },
];
