import React, { useState, useEffect } from "react";
/* como seria sem os hooks 
state ={
  repositories: []
} */
/* state = {
  repositories: []
}
setRepositore é para alterar ou atualizar o valor.
} */
export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);
    /* Esse return é como se fose um compentWillMount */
    return () => navigator.geolocation.clearWatch(watchId)
  }, []);

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
