import { Route } from "react-router-dom";
import { routes } from "../../Utils/constants/routes";

const AppRouter = () => {
  return (
    <div className="content">
      {/* <BreadCrumb /> */}
      {routes.map((route) => (
        <Route path={route.path} exact={true} component={route.component} />
      ))}
    </div>
  );
};

export default AppRouter;
