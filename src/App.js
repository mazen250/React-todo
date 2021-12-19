import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      
      <Todos />
      <Footer />
    </div>
  );
}

export default App;
