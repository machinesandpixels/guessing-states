import { useEffect, useRef, useState } from 'react';
import { BsFillAlarmFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  color: ${props => (props.$danger ? "red" : "black")};
`;

const TimeLeftContainer = styled.div`
  margin-top: -2px;
  margin-left: 5px;
`;

function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState(20);
  const timeoutRef = useRef(null);
  const [audio] = useState(new Audio('https://www.soundjay.com/clock/sounds/clock-ticking-2.mp3'));
  const [playing, setPlaying] = useState(true);
  const isDanger = timeLeft <= 10;

  useEffect(() => {
    if (timeLeft > 0) {
      audio.play();
      timeoutRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      clearTimeout(timeoutRef.current);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [timeLeft]);

//   useEffect(() => {
//     audio.loop = true;
//     playing ? audio.play() : audio.pause();
//   },
//   [playing]
// );

  return(
    <StyledContainer $danger={isDanger}>
      <div className="">
        <BsFillAlarmFill />
      </div>
    <TimeLeftContainer>
      <span>
        {timeLeft} seconds
      </span>
    </TimeLeftContainer>
  </StyledContainer>
  );
}

export default CountDownTimer;