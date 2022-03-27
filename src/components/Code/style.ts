import styled from 'styled-components'

export const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const CodeList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: flex-end;
  flex-direction: column;
  align-items: center;
`

export const CodeItem = styled.div`
  margin: 5px;
  background: ${(props: any) => props.active ? '#121212' : '#181818'};
  border-radius: 3px;
  color: #c4c4c4;
  padding: 10px;
  display: grid;
  grid-template-columns: 40px 10fr;
`

export const CodeResponse = styled.code`
  position: absolute;
  color: yellow;
  line-height: 21px;
  top: 1px;
`

export const CodeResponseLayout = styled.div`
  position: relative; 
`

export const Texts = styled.div`
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
  color: #ff00cc;
  whitespace: normal;
  padding: 10px;
`
