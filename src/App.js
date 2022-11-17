import React, { useEffect, useState } from 'react';

import './App.css';



function App() {

  const items = ["you're home", "you're back", "you arrive", "you're safe"]
  const [itemIndex, setItemIndex] = useState(0)

  // const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setItemIndex((itemIndex + 1) % items.length)
      console.log(itemIndex)
    }, 2000);

    return () => {
      clearInterval(interval);
    };

  }, [itemIndex]);

  return (
    <div className="landing-page">
      <header className="header">
        TextMeWhen is currently in closed beta.
        <p>
          Sign up for the closed beta.
        </p>
        <form>
          <input type="text" id="fname" name="fname"/>
          <button>Submit</button>
        </form>
      </header>

    </div>
  );
}

export default App;
