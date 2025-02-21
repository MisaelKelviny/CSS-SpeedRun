import styled from "styled-components";
import WindowsTitle from "../Title";

type WindowProperties = {
  children: any;
  width: string;
  height?: string;
  title: string;
};

interface WindowCardProp {
  width: string;
  height?: string;
}

const Container = styled.div<Pick<WindowCardProp, "width" | "height">>`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  background: #181425;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
    inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  color: white;
  margin: 3px 0px;
`;

const Content = styled.div`
  padding: 20px;
  user-select: none;
  display: flex;
  justify-content: space-between;
`;

const WindowCard = ({ width, height, title, children }: WindowProperties) => {
  return (
    <Container width={width} height={height}>
      <WindowsTitle text={title} type={"card"} />
      <Content>{children}</Content>
    </Container>
  );
};

export default WindowCard;
