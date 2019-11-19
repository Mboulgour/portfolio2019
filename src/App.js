import React, { useState, useEffect } from 'react';

import Nav from './components/Nav';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      {loading ? 
        "Loading..."
      :
        <Nav />
      }
    </div>
  );
}

export default App;
