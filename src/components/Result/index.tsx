import styled from 'styled-components'
import WindowContent from '../../styles/components/WindowContent'

interface ResultProps {
  name: string,
  value: string,
  input: stirng,
  start: boolean
}

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
`

const Object = styled.div`
  transform: scale(2)
`

export const Result = ({ name, value, input, level, start }: ResultProps) => {

  const style = `
    ${value}
    ${input}  
  `

  return (
    <ResultContainer>
      <WindowContent
        width="90%"
        title={!start ? name : ''}
        start={start}
      >
        <Object>
          <style>{style}</style>
          <div className={level}></div>
        </Object>
      </WindowContent>
    </ResultContainer>
  )
}
