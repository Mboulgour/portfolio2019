import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timer);
  }); // Set it to 5000 when dev is DONE

  return (
    <div>
      <div className={loading ? "loading" : "loading loading--stop"}>
        <span></span>
      </div>
      <Nav />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
