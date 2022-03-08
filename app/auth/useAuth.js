import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

function useAuth(props) {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.setToken(token);
  };

  return { user, setUser, logOut, logIn };
}

export default useAuth;
