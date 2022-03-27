import { useEffect, useState } from 'react'
import { CompleteModel } from '../../model/Complete'
import GlitchText from '../../styles/components/GlitchText'
import WindowCard from '../../styles/components/Windows/WindowCard'
import { CodeContainer, CodeList, CodeResponse, CodeResponseLayout } from './style'

interface CodeProps {
  values: string,
  code: any,
  index: number,
  start: boolean,
  complete: CompleteModel
}

const Code = ({
  code,
  values,
  complete,
  index,
  start
}: CodeProps) => {
  const [text, setText] = useState('')
  useEffect(() => {
    if (code[index] !== undefined) {
      if (code[index].code.length > 0) {
        if (code[index].code[0].line.slice(0, values.length) === values && values !== text) {
          setText(values)
        }
      }
    }
  }, [values, code, text])

  return (
    <CodeContainer>
      <CodeList>
        {start
          ? <GlitchText
            text={'Pressione "." no input abaixo para iniciar o jogo!'}
            size={'30px'}
          />
          : code[index] !== undefined
            ? code[index]?.code.map(cd => {
              return (
                <WindowCard
                  key={cd.id}
                  width={'90%'}
                  title={cd.id}
                >
                  {cd.active
                    ? <CodeResponseLayout>
                      <CodeResponse>
                        {text}
                      </CodeResponse>
                      <code>
                        {cd.line}
                      </code>
                    </CodeResponseLayout>
                    : <code>
                      {cd.line}
                    </code>
                  }
                </WindowCard>
              )
            }).reverse()
            : <GlitchText
              text={'Parabéns você completou o speed run' + '\r\n' + '🎉✨🎉✨🎉'}
              size={'30px'}
            />
        }
      </CodeList>
    </CodeContainer>
  )
}

export default Code
