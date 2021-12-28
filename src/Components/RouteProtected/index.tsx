import { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "../../Config/firebase";
import axios from "../../Config/axios";
import { getProfile } from "../../Store/User/action";

export const RouteProtected = ({ component: Component, ...rest }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const idToken = await user?.getIdToken();
      console.log(idToken, "@user");
      axios.defaults.headers.common.Authorization = idToken ?? "";
      idToken?.length ? setIsAuthenticated(true) : setIsAuthenticated(false);
      await getProfile();
    });
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated === null) {
          return "loading..";
        } else if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default RouteProtected;
