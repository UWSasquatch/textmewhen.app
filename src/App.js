import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const items = ["you're home", "you're back", "you arrive", "you're safe"];
  const [itemIndex, setItemIndex] = useState(0);

  // const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setItemIndex((itemIndex + 1) % items.length);
      console.log(itemIndex);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [itemIndex]);

  return (
    <div className="landing-page">
      <p className="header-title">Text Me When</p>
      <p className="header-subtitle">Let your loved ones know you're safe</p>
      <header className="header">
        <p>Be the first to know when we launch!</p>
        <form class="custom-search">
          <input
            type="text"
            class="custom-search-input"
            placeholder="Enter your email"
          />
          <button class="custom-search-button" type="submit">
            Sign Up
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
