import { useSelector } from 'react-redux';

function UserStatusDisplay() {
  const userName = useSelector(
    (state: { user: { userName: string | '' } }) => state.user.userName,
  );

  return (
    <p>Status: {userName ? `Logged in as ${userName}` : 'Not logged in'}</p>
  );
}

export default UserStatusDisplay;
