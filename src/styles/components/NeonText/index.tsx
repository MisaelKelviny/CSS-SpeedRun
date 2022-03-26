import styled, { keyframes } from 'styled-components'

type TextProp = {
  text: string
}

const flicker = keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #0fa,
    0 0 80px #0fa,
    0 0 90px #0fa,
    0 0 100px #0fa,
    0 0 150px #0fa;
  }

  20%, 24%, 55% {        
    text-shadow: none;
  }
`

const pulsate = keyframes`
  100% {
    text-shadow:
    0 0 4px #05f298,
    0 0 11px #05f298,
    0 0 19px #05f298,
    0 0 40px #0fa,
    0 0 80px #0fa,
    0 0 90px #0fa,
    0 0 100px #0fa,
    0 0 150px #0fa;
  }

  0% {
    text-shadow:
    0 0 2px #05f298,
    0 0 4px #05f298,
    0 0 6px #05f298,
    0 0 10px #0fa,
    0 0 45px #0fa,
    0 0 55px #0fa,
    0 0 70px #0fa,
    0 0 80px #0fa;
  }
`

const Text = styled.div`
  color: ${props => props.color};
  text-shadow:
    0 0 7px ${props => props.color},
    0 0 10px ${props => props.color},
    0 0 21px ${props => props.color},
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
    animation: ${pulsate} 2.5s infinite alternate
`

const NeonText = ({ text, color }) => {
  return (
    <Text color={color}>
      {text}
    </Text>
  )
}

export default NeonText;