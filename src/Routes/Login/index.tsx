import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { signInWithGoogle, auth } from "../../Config/firebase";
import { login } from "../../Store/User/action";
import { UserProfile } from "../../Interface/UserState";
import { useHistory } from "react-router";

export interface AuthLoginProps {
  open: boolean;
  toggleModal: any;
}

const Login = (props: AuthLoginProps) => {
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth: any) => {
      if (!userAuth) return;
      const { providerData }: { providerData: UserProfile[] } = userAuth;
      const userDetails: UserProfile = { ...providerData[0] };
      await login(userDetails);
      history.push("/");
    });
  }, []);

  return (
    <div className="login-page">
      <div className="flex space-between full-height">
        <div className="login-card">
          <div className="login-caption">
            <Typography variant="h3" className="mr-bottom-md">
              TURN YOUR HABITS INTO
              <span className="font-green"> SAVING</span>
            </Typography>
            <Typography className="mr-bottom-md">
              Know where your money went rather than wondering. Start your
              journey of budgeting with Dimer
            </Typography>
          </div>
          <div className="button-area flex">
            <Button
              size="large"
              className="btn-google btn-block text-uppercase btn-outline"
              onClick={signInWithGoogle}
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                alt="google logo"
                className="mr-right-xs"
              />{" "}
              Continue with google
            </Button>
          </div>
        </div>
        <div className="login-background login-card"></div>
      </div>
    </div>
  );
};

export default Login;
