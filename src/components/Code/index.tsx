import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlitchText from '../../styles/components/GlitchText';
import WindowCard from '../../styles/components/WindowCard';

interface CodeProps {
  values: string,
  code: any,
  index: number,
  start: boolean
}

const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const CodeList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: flex-end;
  flex-direction: column;
  align-items: center;
`

const CodeItem = styled.div`
  margin: 5px;
  background: ${props => props.active ? "#121212" : "#181818"};
  border-radius: 3px;
  color: #c4c4c4;
  padding: 10px;
  display: grid;
  grid-template-columns: 40px 10fr;
`

const CodeResponse = styled.code`
  position: absolute;
  color: yellow;
  line-height: 21px;
  top: 1px;
`

const CodeResponseLayout = styled.div`
  position: relative;
`

const Texts = styled.div`
  font-size: 30px;
  margin: 0 auto;
  text-align: center;
  color: #ff00cc;
  whitespace: normal;
  padding: 10px;
`

const Code = ({ code, values, complete, index, start }: CodeProps) => {
  const [text, setText] = useState("")
  useEffect(() => {
    if (code[index] != undefined) {
      if (code[index].code.length > 0) {
        if (code[index].code[0].line.slice(0, values.length) == values && values !== text) {
          setText(values)
        }
      }
    }
  }, [values, code, text])

  return (
    <CodeContainer>
      <CodeList>
        {start ?
          <GlitchText
            text={'Pressione "." no input abaixo para iniciar o jogo!'}
            size={'30px'}
          />
          :
          code[index] != undefined ? code[index]?.code.map(cd => {
            return (
              <WindowCard
                key={cd.id}
                width="90%"
                title={cd.id}
              >
                {cd.active ?
                  <CodeResponseLayout>
                    <CodeResponse>{text}</CodeResponse>
                    <code>{cd.line}</code>
                  </CodeResponseLayout>
                  :
                  <code>
                    {cd.line}
                  </code>
                }
              </WindowCard>
            )
          }).reverse() :
            <GlitchText
              text={'Parabéns você completou o speed run \r\n 🎉✨🎉✨🎉'}
              size={'30px'}
            />
        }
      </CodeList>
    </CodeContainer>
  );
}

export default Code;