import styled from 'styled-components'
import { TextProp } from '../../model/TextModel'

const Texts = styled.div`
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: -.0625rem -.0625rem 0 #6BFFFF, .0625rem .0625rem 0 #FF819E;
  font-size: 30px;
  margin: 0 auto;
`

const GlitchText = ({ children }: TextProp) => {
  return (
    <Texts>
      {children}
    </Texts>
  )
}

export default GlitchText
