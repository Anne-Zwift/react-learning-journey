import { Link } from "@tanstack/react-router";
import { users } from '../data/users';

function UserListPage() {
  return (
    <div>
      <h1>User list</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to='/users/$userId' params={{ userId: user.id }}>
              {user.name}</Link>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default UserListPage;