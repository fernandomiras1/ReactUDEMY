import { useEffect, useState, useRef } from 'react';

export const useDelay = ( seg ) => {
 
  const [stop, setStop] = useState(false)
  const [completed, setCompleted] = useState(false)
  const timerDelayRef = useRef(null);


    useEffect(() => {
      timerDelayRef.current = setTimeout(() => {
        console.log('SE para');
        setCompleted(true);
      }, seg * 1000);

      if (stop) {
        console.log('Lipiar Delay desde otro componete');
        clearTimeout(timerDelayRef.current)
      }

  
      return () => clearTimeout(timerDelayRef.current)
  
    }, [stop])
  

    return {
      completed,
      stop,
      setStop
    }

}
