import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SingleProperty from "./components/SingleProperty";
import { Route, Routes } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties/:property_id" element={<SingleProperty />} />
      </Routes>
    </>
  );
}

export default App;
