import React from 'react';
import useTime from './core/hooks/useTime';

function App() {
  const {seconds, reset} = useTime(); // Obtiene la hora formateada del hook

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        fontFamily: 'Arial, sans-serif',
        flexDirection: 'column'
      }}
    >
      <p style={{ fontSize: '6rem', fontWeight: 'bold', margin: 0 }}>{seconds}</p>
      <button onClick={reset}>Reiniciar contador</button>
    </div>
  );
}

export default App;