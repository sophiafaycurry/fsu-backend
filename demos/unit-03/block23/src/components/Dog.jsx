export default function Dog({ dog, addTreats }) {
  return (
    <div>
      <b>{dog.dogName}</b>{" "}
      <button onClick={() => addTreats(dog)}>Give Treats</button>
    </div>
  );
}
