import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
