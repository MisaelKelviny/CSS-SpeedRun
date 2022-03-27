import { useEffect, useState } from 'react'
import GlitchText from '../../styles/components/GlitchText'
import WindowCard from '../../styles/components/Windows/WindowCard'
import { CodeContainer, CodeList, CodeResponse, CodeResponseLayout } from './style'

interface CodeProps {
  values: string,
  code: any,
  index: number,
  start: boolean
}

const Code = ({
  code,
  values,
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
          ? <GlitchText>
            Pressione . no input abaixo para iniciar o jogo!
          </GlitchText>
          : code[index] !== undefined
            ? code[index]?.code.map((cd: any) => {
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
            : <GlitchText>
              Parabéns você completou o speed run <br /> 🎉✨🎉✨🎉
            </GlitchText>
        }
      </CodeList>
    </CodeContainer>
  )
}

export default Code
