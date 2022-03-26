import styled from 'styled-components'
import WindowCard from '../../styles/components/WindowCard'

interface TimeProps {
  complete: any
}

const TimeContainer = styled.div`
  padding: 15px;
`

const TimeCard = styled.div`
  height: 40px;
  color: #c1c1c1;
  background: #171717;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 40px 10fr;
  padding: 10px;
  margin: 5px;
  align-items: center;
`

const TimerCard = styled.span`
  color: #05f298;
  font-weight: bolder;
  margin: 4px 0
`

const TimeResults = ({ complete }: TimeProps) => {
  return (
    <TimeContainer>
      {complete.map(item => {
        return (
          <WindowCard height="85px" width="100%" title={"Nível " + item.nivel}>
            Concluído em: <TimerCard>{item.timer}</TimerCard>
          </WindowCard>
          // <TimeCard key={item.nivel}>
          //   <span>{item.nivel}</span>
          //   <span>{item.timer}</span>
          // </TimeCard>
        )
      })}
    </TimeContainer>
  );
}

export default TimeResults;