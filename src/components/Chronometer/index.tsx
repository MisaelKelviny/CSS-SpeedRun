import Timer from 'easytimer.js'
import { useEffect } from 'react'
import NeonText from '../../styles/components/NeonText'
import { TimerContainer, TimerCounter } from './style'

type ChronometerProp = {
  timer: Timer,
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
        <NeonText>
          {timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])}
        </NeonText>
      </TimerCounter>
    </TimerContainer>
  )
}

export default Chronometer
