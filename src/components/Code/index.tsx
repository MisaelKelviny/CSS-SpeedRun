import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CodeProps {
  values: string,
  code: any,
  index: number,
}

const CodeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const CodeList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  place-content: flex-end;
  flex-direction: column;
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

const Code = ({ code, values, complete }: CodeProps) => {
  const [text, setText] = useState("")

  useEffect(() => {
    if (code[0].code.length > 0) {
      if (code[0].code[0].line.slice(0, values.length) == values && values !== text) {
        setText(values)
      }
    }
  }, [values, code])

  return (
    <CodeContainer>
      <CodeList>
        {code[0].code.length > 0 ? code[0].code.map(cd => {
          return (
            <CodeItem key={cd.id} active={cd.active}>
              <div>
                {cd.id}
              </div>
              {cd.active ?
                <CodeResponseLayout>
                  <CodeResponse>
                    {text}
                  </CodeResponse>
                  <code>
                    {cd.line}
                  </code>
                </CodeResponseLayout>
                :
                <code>
                  {cd.line}
                </code>
              }
            </CodeItem>
          )
        }).reverse()
          :
          <div>
            <p>Parabéns você completou o nível {code[0].nivel}</p>
            <button>Proximo Nível</button>
          </div>
        }
      </CodeList>
    </CodeContainer>
  );
}

export default Code;