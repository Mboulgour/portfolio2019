import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';
import About from './components/About';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer);
  }); // Set it to 5000 when dev is DONE

  return (
    <div>
      <span className={loading ? "loading" : "loading loading--stop"}>
        Loading...
      </span>
      <Nav />
      <About />
    </div>
  );
}

export default App;
