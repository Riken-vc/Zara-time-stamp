import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import RecordTime from "../pages/RecordTime";

const routes = [
  { path: "/login", exact: true, auth: false, Component: Login },
  { path: "/dashboard", exact: true, auth: true, Component: Dashboard },
  { path: "/timesheet", exact: true, auth: true, Component: RecordTime },
];

export default routes;
