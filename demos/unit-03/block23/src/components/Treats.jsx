function Treats({ treats, addTreats, removeTreats }) {
  return (
    <>
      <h2>Treats</h2>

      {treats.length === 0 ? (
        <p>No doggy treats</p>
      ) : (
        <>
          {treats.map((treat) => {
            return (
              <div key={treat.id}>
                <button
                  onClick={() => {
                    removeTreats(treat);
                  }}
                  style={{ color: "red" }}
                >
                  -
                </button>{" "}
                <span>
                  {treat.dogName}: {treat.quantity} treats
                </span>{" "}
                <button
                  onClick={() => addTreats(treat)}
                  style={{ color: "darkgreen" }}
                >
                  +
                </button>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Treats;
