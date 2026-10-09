import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectCurrentUser } from "../features/auth/authSlice";


function AuthStatus() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);

  return (
    <p>
      {isAuthenticated
      ? `Logged in as ${user?.name}`
      : 'Not logged in'}
    </p>
  );
}

export default AuthStatus;