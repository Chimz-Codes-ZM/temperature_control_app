import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: count > 2 ? "red" : "blue",
          margin: ".5rem",
          fontSize: "4rem",
          padding: "2rem",
          transition: ".4s",
          borderRadius: "50%"
        }}
      >
        {count}
      </div>

      <div>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            fontSize: "4rem",
            padding: "2rem",
          }}
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{
            fontSize: "4rem",
            padding: "2rem",
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
