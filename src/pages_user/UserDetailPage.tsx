import { userDetailRoute } from '../router';

function UserDetailPage() {
  const { userId } = userDetailRoute.useParams();
  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserDetailPage;