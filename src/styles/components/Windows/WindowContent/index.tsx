import styled from 'styled-components'
import WindowsTitle from '../Title'

type WindowProperties = {
  children: any;
  width: string;
  height: string;
  title: string;
  start?: boolean;
};

interface WindowContainerProp{
  width: string,
  height: string,
  active?: boolean
}

const Container = styled.div<Pick<WindowContainerProp, 'width' | 'height' | 'active'>>`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  transition: 1s ease-in;
  position: relative;
  bottom: ${(props: any) => (props.active ? '-100%' : '0px')};
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
        type={'content'}
      />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default WindowContent
