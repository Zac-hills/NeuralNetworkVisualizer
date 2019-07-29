import React from "react";
import "./App.css";
import Network from "./components/Network/Network";

const testObject = {
  layers: [
    { layer: [{ weights: [0] }, { weights: [0] }, { weights: [0] }] },
    {
      layer: [
        { weights: [0.1, 0.33, 0.5] },
        { weights: [0.1, 0.2, 0.4] },
        { weights: [0.2, 0.34, 0.76] }
      ]
    },
    {
      layer: [
        { weights: [0.2, 0.43, 0.6] },
        { weights: [0.5, 0.2, 0.1] },
        { weights: [0.02, 0.15, 0.18] }
      ]
    }
  ]
};

function App() {
  return (
    <div className="App">
      <Network neuralNetwork={testObject} />
    </div>
  );
}

export default App;
