import styled from 'styled-components'

type WindowProperties = {
  children: any,
  width: number,
  height: number,
  title: string
}

const cardColorPrimary = "navy"
const cardColorSecondary = "navy"

const Container = styled.div`
  width: ${props => props.width};
  height:  ${props => props.height};
  background: #181425;
  box-shadow: inset -1px -1px #0a0a0a, 
              inset 1px 1px #dfdfdf, 
              inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  color: white;
  margin: 3px 0px;
  user-select: none;
`

const Title = styled.div`
  align-items: center;
  background: linear-gradient(90deg,${cardColorPrimary},${cardColorSecondary});
  display: flex;
  justify-content: space-between;
  padding: 3px 2px 3px 3px;
  border-bottom: 3px solid silver;
`
const Text = styled.div`
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
  margin-right: 24px;
`

const Controls = styled.div`
  display: flex;
`

const Button = styled.button`
  display: block;
  min-height: 14px;
  min-width: 16px;
  padding: 0px;
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  font-weight: bolder
`

const Content = styled.div`
  padding: 20px;
`


const WindowCard = ({ width, height, title, children }: WindowProperties) => {
  return (
    <Container width={width} height={height}>
      <Title>
        <Text>{title}</Text>
        <Controls>
          <Button aria-label="Close">X</Button>
        </Controls>
      </Title>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default WindowCard;