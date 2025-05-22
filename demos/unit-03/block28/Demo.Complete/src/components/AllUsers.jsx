import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Logan" },
  { id: 2, name: "Chase" },
  { id: 3, name: "Lincoln" },
];

export default function AllUsers() {
  const navigate = useNavigate();
  return (
    <h1>
      {users.map((user) => {
        return (
          <div key={user.id} style={{ cursor: "pointer" }}>
            <h2 onClick={() => navigate(`/users/${user.id}`)}>{user.name}</h2>
          </div>
        );
      })}
    </h1>
  );
}
