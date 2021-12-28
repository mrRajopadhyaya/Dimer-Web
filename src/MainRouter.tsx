import { Switch } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import RouteAuth from "./Components/RouteAuth";
import RouteProtected from "./Components/RouteProtected";
import Login from "./Routes/Login";

const MainRouter = () => {
  return (
    <Switch>
      <RouteAuth path="/login" component={Login} />
      <RouteProtected path="/" component={AppLayout} />
    </Switch>
  );
};
export default MainRouter;
