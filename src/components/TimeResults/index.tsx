import styled from 'styled-components'

interface TimeProps {
  complete: any
}

const TimeContainer = styled.div`
 
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

const TimeResults = ({ complete }: TimeProps) => {
  return (
    <TimeContainer>
      {complete.map(item => {
        return (
          <TimeCard key={item.id}>
            <span>{item.id}</span>
            <span>{item.timer}</span>
          </TimeCard>
        )
      })}
    </TimeContainer>
  );
}

export default TimeResults;