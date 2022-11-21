import React from "react";
import Home from "./Home";
import Login from "./Login"
import Welcome from "./Welcome"
import Start from "./Start"
import Testimonios from "./Testimonios"
import Cuestionario from "./Cuestionario"
import Cuestionario1 from "./Cuestionario1"
import Cuestionario2 from "./Cuestionario2"
import Pricing from "./Pricing"
import Payment from "./Payment"
import About from "./About"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Welcome" element={<Welcome />}></Route>
      <Route path="/Start" element={<Start />}></Route>
      <Route path="/Testimonios" element={<Testimonios />}></Route>
      <Route path="/Cuestionario" element={<Cuestionario />}></Route>
      <Route path="/Cuestionario1" element={<Cuestionario1 />}></Route>
      <Route path="/Cuestionario2" element={<Cuestionario2 />}></Route>
      <Route path="/Pricing" element={<Pricing />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>
  );
}

export default App;
