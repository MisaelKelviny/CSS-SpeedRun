import styled from 'styled-components'
import WindowsTitle from '../Title'

type WindowProperties = {
  children: any;
  width: number;
  height: number;
  title: string;
  start?: boolean;
};

const Container = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  transition: 1s ease-in;
  position: relative;
  bottom: ${(props) => (props.active ? '-100%' : '0px')};
`

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WindowContent = ({
  width,
  height,
  title,
  children,
  start
}: WindowProperties) => {
  return (
    <Container
      width={width}
      height={height}
      active={start}
    >
      <WindowsTitle
        text={title}
        type="content"
      />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default WindowContent
