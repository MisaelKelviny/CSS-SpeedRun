import { useEffect } from 'react'
import NeonText from '../../styles/components/NeonText'
import { TimerColor } from '../../styles/Timer'
import { TimerContainer, TimerCounter } from './style'

type ChronometerProp = {
  timer: string,
  start?: boolean
}

const Chronometer = ({ timer, start }: ChronometerProp) => {
  const startTimer = () => {
    timer.start({ precision: 'secondTenths' })
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
          color={TimerColor.PRIMARY}
        />
      </TimerCounter>
    </TimerContainer>
  )
}

export default Chronometer
