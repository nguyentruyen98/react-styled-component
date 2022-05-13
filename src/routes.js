import {
  Home,
  HomeFilled,
  Clipboard,
  ClipboardFilled,
  Books,
  BooksFilled,
  Cog,
  CogFilled,
} from "modules/common/components/Icons";
import Dashboard from "modules/leave-management/pages/Dashboard";
import Other from "modules/other/pages/SamplePage";
import LeaveRequest from "modules/leave-management/pages/LeaveRequest";
export const mainRoutes = [
  {
    path: "/",
    icon: Home,
    activeIcon: HomeFilled,
    label: "Home",
    content: <Other />,
  },
  {
    path: "/leave-management",
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: "Leave Management",
    content: <Dashboard />,
  },
  {
    path: "/documents",
    icon: Books,
    activeIcon: BooksFilled,
    label: "Documents",
    content: <Other />,
  },
  {
    path: "settings",
    icon: Cog,
    activeIcon: CogFilled,
    label: "Settings",
    content: <Other />,
  },
];
export const otherRoutes = [
  {
    path: "/leave-management/:id",
    content: <LeaveRequest />,
  },
];
const allRoutes = [...mainRoutes, ...otherRoutes];

export default allRoutes;
