import styled from 'styled-components'
import { TextProp } from '../../model/TextModel'

const Text = styled.div`
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: -.0625rem -.0625rem 0 #6BFFFF, .0625rem .0625rem 0 #FF819E;
  font-size: ${props => props.size};
  margin: 0 auto;
`

const GlitchText = ({ text, size }: TextProp) => {
  return (
    <Text size={size}>
      {text}
    </Text>
  )
}

export default GlitchText
