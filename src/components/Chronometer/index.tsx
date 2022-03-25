import styled from 'styled-components';

const TimerCounter = styled.div`
  color: #c4c4c4;
  font-size: 40px;
`
const TimerContainer = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Chronometer = ({ startTimer, timer }) => {
  return (
    <TimerContainer>
      <div>
        <button onClick={startTimer}>Começar</button>
      </div>
      <TimerCounter>
        <span>{timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])}</span>
      </TimerCounter>
    </TimerContainer>
  );
}

export default Chronometer;