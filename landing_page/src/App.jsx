import React from "react";
import Hero from "./components/hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-600">
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}

export default App;
