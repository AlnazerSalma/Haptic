import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import AppRouter from "./Router/AppRouter";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <AppRouter load={load} />
    </>
  );
}

export default App;
