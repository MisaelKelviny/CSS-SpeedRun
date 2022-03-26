import { useEffect } from 'react';
import styled from 'styled-components';
import NeonText from '../../styles/components/NeonText';

const TimerColor = "#05f298"
const TimerColorSecondary = "#05f298"

const TimerCounter = styled.div`
  font-size: 71px;
  color: ${TimerColor};
`
const TimerContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Chronometer = ({ timer, start }) => {
  const startTimer = () => {
    timer.start({ precision: 'secondTenths' });
  }

  useEffect(() => {
    if (!start) {
      startTimer()
    }
  }, [start])


  return (
    <TimerContainer>
      <TimerCounter>
        <NeonText
          text={timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])}
          color={TimerColor}
        />
      </TimerCounter>
    </TimerContainer>
  );
}

export default Chronometer;