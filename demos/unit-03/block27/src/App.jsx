import "./App.css";
import useQuery from "./api/useQuery";
import useMutation from "./api/useMutation";

function App() {
  // Fetch puppies from the API and provide the "puppies" tag
  const { data: puppies, loading, error } = useQuery("/players", "puppies");

  // Mutation that will POST /players and invalidate the "puppies" tag
  // I am renaming the data, loading, and error variables here because
  // they will conflict with the query variables otherwise
  const {
    mutate,
    data: addedPuppy,
    loading: adding,
    error: addError,
  } = useMutation("POST", "/players", ["puppies"]);

  /** Calls the mutate function with data from the form */
  const addPuppy = (formData) => {
    const name = formData.get("name");
    // breed is required to add a puppy
    mutate({ name, breed: "dog" });
  };

  return (
    <>
      <h1>Puppy Demo</h1>
      {puppies &&
        puppies.data.players.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
        })}
      <form action={addPuppy}>
        <label>
          Name: <input name="name" />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
