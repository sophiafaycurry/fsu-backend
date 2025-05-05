import Dog from "./Dog";

function Dogs({ dogs, addTreats }) {
  return (
    <>
      <h2>Dogs</h2>
      <>
        {dogs.map((dog) => (
          <Dog key={dog.id} dog={dog} addTreats={addTreats} />
        ))}
      </>
    </>
  );
}

export default Dogs;
