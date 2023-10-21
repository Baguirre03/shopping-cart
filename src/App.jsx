import { Routes, Route } from "react-router-dom";
import Navbar from "./Nav";
import Home from "./Home";
import Shop from "./Shop";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;
