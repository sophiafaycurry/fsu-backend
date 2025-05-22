import "./App.css";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SingleUser from "./components/SingleUser";

// Routes, Route
function App() {
  return (
    <>
      <Nav />

      <Home />
      <AllUsers />
    </>
  );
}

export default App;
