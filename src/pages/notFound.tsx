import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go To Home</Link>
    </div>
  );
}

export default NotFoundPage;
