import React, { useState, useEffect } from 'react'
import './App.css'

import RoutesApp from './Routes'
import PreloadAllImages from './Preload';

export default function App() {

  const [ISMOBILE, setISMOBILE] = useState(/iphone|ipad|ipod|android|windows phone/i.test(navigator.userAgent));
  const [UPDATECHECK, setUPDATECHECK] = useState(false);

  if (ISMOBILE) {
    console.log("MOBILE DEVICE DETECTED");
  } else {
    console.error("DESKTOP DEVICE DETECTED");
  }

  return (
    <>

      <PreloadAllImages hasFinished={UPDATECHECK} setFinish={setUPDATECHECK} />
      <RoutesApp ISMOBILE={ISMOBILE} />

    </>
  )
}
