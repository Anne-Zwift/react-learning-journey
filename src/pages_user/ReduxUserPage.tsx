import UserStatusDisplay from "../components/UserStatusDisplay";
import LoginControls from "../components/LoginControls";

function ReduxUserPage() {
  return(
    <div>
      <h2>Redux User Demo</h2>
      <UserStatusDisplay />
      <LoginControls />
    </div>
  );
}

export default ReduxUserPage;