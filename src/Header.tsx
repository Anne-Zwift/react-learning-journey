import { useContext } from "react";
import UserContext from "./UserContext";

function Header() {
  const name = useContext(UserContext);

  return (
    <h1>Welcome, {name}!</h1>
  )
}

export default Header;