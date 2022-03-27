import { CompleteModel } from '../../model/Complete'
import WindowCard from '../../styles/components/Windows/WindowCard'
import { TimeContainer, TimerCard } from './style'

interface TimeProps {
  complete: CompleteModel
}

const TimeResults = ({ complete }: TimeProps) => {
  return (
    <TimeContainer>
      {complete.map((item, index) => {
        return (
          <WindowCard
            key={index}
            height={'85px'}
            width={'100%'}
            title={'Nível ' + item.level}
          >
            Concluído em: <TimerCard>{item.timer}</TimerCard>
          </WindowCard>
        )
      })}
    </TimeContainer>
  )
}

export default TimeResults
