import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface ResultProps {
  name: string,
  value: string
}

const ResultContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
`

const ObjectShape = styled.div`
  ${props => { return props.value }}
`

export const Result = ({ name, value }: ResultProps) => {
  const [text, setText] = useState("")

  useEffect(() => {
    if (value !== "" && value !== text) {
      setText(value)
    }
  }, [value])

  return (
    <ResultContainer>
      <h3>{name}</h3>
      <ObjectShape value={text} />
    </ResultContainer>
  )
}
