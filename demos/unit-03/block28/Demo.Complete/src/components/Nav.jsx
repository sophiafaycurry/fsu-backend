import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{ display: "flex", gap: "8px" }}>
      <Link to='/'>Home</Link>
      <Link to='/users'>All Users</Link>
    </nav>
  );
}
