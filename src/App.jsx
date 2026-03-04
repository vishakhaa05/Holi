import React, { useState } from "react";
import "./App.css";

function App() {
  const [shoot, setShoot] = useState(false);

  const handleShoot = () => {
    setShoot(true);
    setTimeout(() => setShoot(false), 1200);
  };

  return (
    <div className="container">
      
      
      <div className={`pichkaari ${shoot ? "move" : ""}`}>
        <div className="barrel"></div>
        <div className="nozzle"></div>
        <div className="handle"></div>
      </div>

      {/* Water Stream */}
      {shoot && <div className="water"></div>}
      {shoot && <div className="splash"></div>}

      <div className="card">
        <h1>🌈 Happy Holi 🌸</h1>
        <p>Ready to get splashed with colors? 💦</p>
        <button onClick={handleShoot}>Click to Celebrate 🎨</button>
      </div>

    </div>
  );
}

export default App;