import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StarterPage from "./Pages/StarterPage";
import reportWebVitals from "./reportWebVitals";

const Root = () => {
  const [started, setStarted] = useState(false);

  return (
    <React.StrictMode>
      {started ? (
        <App />
      ) : (
        <StarterPage onStart={() => setStarted(true)} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
reportWebVitals();
