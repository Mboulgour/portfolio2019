import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <span className={loading ? "loading" : "loading loading--stop"}>
        Loading...
      </span>
      <Nav />
    </div>
  );
}

export default App;
