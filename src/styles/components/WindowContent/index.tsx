import styled, { css } from 'styled-components';
import myFontURL from '../../../assets/fonts/PixelSansSerif.ttf';

type WindowProperties = {
  children: any,
  width: number,
  height: number,
  title: string,
  start?: boolean
}

const fontFaces = css`
  @font-face {
    font-family: 'windowsFont';
    src: url(${myFontURL}) format('ttf');
    font-weight: 200;
    font-style: normal;
  }
`;

const Container = styled.div`
  width: ${props => props.width};
  height:  ${props => props.height};
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, 
              inset 1px 1px #dfdfdf, 
              inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  transition: 1s ease-in;
  position: relative;
  bottom: ${props => props.active ? '-100%' : '0px'}
`

const Title = styled.div`
  align-items: center;
  background: linear-gradient(90deg,navy,#1084d0);
  display: flex;
  justify-content: space-between;
  padding: 3px 2px 3px 3px;
`
const Text = styled.div`
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
  margin-right: 24px;
  font-family: "Pixelated MS Sans Serif", Arial;
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
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


const WindowContent = ({ width, height, title, children, start }: WindowProperties) => {
  return (
    <Container width={width} height={"70%"} active={start}>
      <Title>
        <Text>{title}</Text>
        <Controls>
          <Button aria-label="Minimize" style={{ paddingBottom: '4px' }}>_</Button>
          <Button aria-label="Maximize">▢</Button>
          <Button aria-label="Close">X</Button>
        </Controls>
      </Title>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default WindowContent;