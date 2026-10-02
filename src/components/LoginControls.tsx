import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/user/userSlice';


function LoginControls() {
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: {user: {userName: string | ''}}) => state.user.userName,
  );

  return (
    <div>
      {userName ? (
        <button onClick={() => dispatch(logout())}>Log out</button>
      ) : (
        <button onClick={() => dispatch(login('Test User'))}>Log in</button>
      )}
    </div>
  );
}

export default LoginControls;
