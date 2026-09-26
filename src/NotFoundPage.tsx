import { Link } from "@tanstack/react-router";

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The Page you are looking for is Not Found</p>
      <Link to='/'>Back to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;