import { useState, useEffect, useRef } from 'react';

const useTime = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null); // Sirve para guardar el ID del setInterval y poder limpiarlo más adelante sin que se reinicie el hook.

  // Función que actualiza el contador cada segundo
  const startInterval = () => {
    clearInterval(intervalRef.current); // Previene múltiples intervalos

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => (prev < 59 ? prev + 1 : 0)); // Lógica tipo reloj
    }, 1000);
  };

  // Inicia el intervalo al montar
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Limpieza
  }, []);

  // Función para reiniciar el contador desde cero
  const reset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    startInterval();
  };

  // Devuelve el valor actual y la función para reiniciar
  return { seconds, reset };
};

export default useTime;