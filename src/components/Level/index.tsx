import styled from 'styled-components'

interface LevelProps {
  completed: any
}

const LevelContainer = styled.div`
  color: #c4c4c4;
  display: flex;
  flex-direction: column;
`

const LevelItem = styled.div`
  font-size: 20px;
  font-weight: bold;
`

const Level = ({ completed }: LevelProps) => {
  return (
    <LevelContainer>
      {completed.map((item, index) => {
        return (
          <LevelItem key={index}>
            {completed.level}
          </LevelItem>
        )
      })}
    </LevelContainer>
  )
}

export default Level