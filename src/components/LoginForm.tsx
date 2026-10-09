import { useDispatch, useSelector } from 'react-redux';
import {
  loginUser,
  selectAuthStatus,
  selectAuthError,
  selectIsAuthenticated,
  selectCurrentUser,
} from '../features/auth/authSlice';
import { useState, type SubmitEvent } from 'react';
import LogoutButton from './LogoutButton';
import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

function LoginForm() {
  const dispatch =
    useDispatch<ThunkDispatch<RootState, unknown, UnknownAction>>();
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (status !== 'loading') {
      dispatch(loginUser({ email, password }));
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <h2>Welcome back, {currentUser?.name}!</h2>
        <p>Logged in as: {currentUser?.email}</p>
        <LogoutButton />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Logging in...' : 'Log in'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;
