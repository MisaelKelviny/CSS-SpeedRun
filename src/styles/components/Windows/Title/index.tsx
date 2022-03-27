import { Button, Controls, Text, Title } from './styles'

type TitleProps = {
  text: string,
  type: 'content' | 'card'
}

const WindowsTitle = ({ text, type }: TitleProps) => {
  return (
    <Title>
      <Text>{text}</Text>
      <Controls>
        {type === 'content'
          ? <>
            <Button aria-label="Minimize" style={{ paddingBottom: '4px' }}>_</Button>
            <Button aria-label="Maximize">▢</Button>
          </>
          : ''
        }
        <Button aria-label="Close">X</Button>
      </Controls>
    </Title>
  )
}

export default WindowsTitle
