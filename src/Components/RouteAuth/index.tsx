import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";

export const RouteAuth = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access-token") ?? "";
    accessToken.length ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, []);
  return (
    <div className="">
      <Route
        {...rest}
        render={(props) => {
          if (isAuthenticated === null) {
            return <div className="loading-spinner">loading...</div>;
          } else if (!isAuthenticated) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        }}
      />
    </div>
  );
};
export default RouteAuth;
