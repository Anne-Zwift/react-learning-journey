import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userSlice';
import type { RootState, AppDispatch } from '../app/store';


function UserProfileLoader() {
  const dispatch = useDispatch<AppDispatch>();
  const userName = useSelector((state: RootState) => state.user.userName);
  const status = useSelector((state: RootState) => state.user.status);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading User...</p>;
  }
  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }
  if (status === 'succeeded') {
    return <p>User: {userName}</p>;
  }
  return null;
}

export default UserProfileLoader;
