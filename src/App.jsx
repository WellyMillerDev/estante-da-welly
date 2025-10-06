import React, { useState, useEffect } from 'react'
import './App.css'

import RoutesApp from './Routes'
function App() {

  const [ISMOBILE, setISMOBILE] = useState(/iphone|ipad|ipod|android|windows phone/i.test(navigator.userAgent));

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <>

      <RoutesApp ISMOBILE={ISMOBILE} />

    </>
  )
}

export default App
