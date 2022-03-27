
import { ResultsProps } from '../../model/Results'
import WindowContent from '../../styles/components/Windows/WindowContent'
import { Object, ResultContainer } from './style'

export const Result = ({
  name,
  value,
  input,
  level,
  start
}: ResultsProps) => {
  const style = `
    ${value}
    ${input}  
  `
  return (
    <ResultContainer>
      <WindowContent
        width={'90%'}
        height={'70%'}
        title={!start ? name : ''}
        start={start}
      >
        <Object>
          <style>
            {style}
          </style>
          <div className={level}></div>
        </Object>
      </WindowContent>
    </ResultContainer>
  )
}
