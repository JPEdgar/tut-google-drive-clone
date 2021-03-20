import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import SignUp from "./authentication/SignUp";
import Profile from "./Profile";
import LogIn from "./authentication/LogIn";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard"

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            {/* Drive */}
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* Profile/User */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            {/* Auth */}
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
