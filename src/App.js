import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [started, setStart] = useState(false);
  return (
    <div className="App">
      {started ? (
        <div class="orb orb_1" />
      ) : (
        <button
          onClick={() => {
            setStart(true);
            setTimeout(() => {
              setStart(false);
            }, 14 * 1000 * 5);
          }}
        >
          Start
        </button>
      )}
    </div>
  );
}
