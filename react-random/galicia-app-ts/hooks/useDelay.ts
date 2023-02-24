import { useEffect, useState, useRef } from "react";

export const useDelay = (seg: number) => {
  const [stop, setStop] = useState(false);
  const [completed, setCompleted] = useState(false);
  const timerDelayRef: any = useRef(null);

  useEffect(() => {
    timerDelayRef.current = setTimeout(() => {
      console.log("FINALIZA EL DELAY");
      setCompleted(true);
    }, seg * 1000);

    if (stop) {
      console.log("DESTROY DELAY");
      clearTimeout(timerDelayRef.current);
    }

    return () => clearTimeout(timerDelayRef.current);
  }, [stop]);

  return {
    completed,
    stop,
    setStop,
  };
};
