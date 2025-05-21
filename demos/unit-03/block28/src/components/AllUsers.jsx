// useNavigate
const users = [
  { id: 1, name: "Logan" },
  { id: 2, name: "Chase" },
  { id: 3, name: "Lincoln" },
];

const AllUsers = () => {
  return (
    <h1>
      {users.map((user) => {
        return (
          <div key={user.id} style={{ cursor: "pointer" }}>
            <h2 onClick={() => console.log(user.id)}>{user.name}</h2>
          </div>
        );
      })}
    </h1>
  );
};

export default AllUsers;
