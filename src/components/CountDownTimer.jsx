import { useEffect, useRef, useState } from 'react';
import { BsFillAlarmFill } from 'react-icons/bs';

function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(20);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (timeLeft > 0) {
      timeoutRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      clearTimeout(timeoutRef.current);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [timeLeft]);

  return(
    <div> 
      <BsFillAlarmFill /> 
      <span> {timeLeft} seconds </span>  
    </div>
  );
}

export default CountDownTimer;