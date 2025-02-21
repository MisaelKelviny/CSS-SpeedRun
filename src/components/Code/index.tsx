import { useEffect } from "react";
import GlitchText from "../../styles/components/GlitchText";
import WindowCard from "../../styles/components/Windows/WindowCard";
import {
  CodeContainer,
  CodeList,
  CodeResponse,
  CodeResponseLayout,
} from "./style";

interface CodeProps {
  values: string;
  code: any;
  index: number;
  start: boolean;
  text: string;
  setText: Function;
}

const Code = ({ code, values, index, start, text, setText }: CodeProps) => {
  useEffect(() => {
    if (code[index]?.code.length > 0) {
      const expected = code[index].code[0].line.replace(/\s+/g, "");
      const input = values.replace(/\s+/g, "");

      if (expected.startsWith(input) && values.trim() !== "") {
        let formattedText = "";
        let expectedIndex = 0;

        for (let i = 0; i < values.length; i++) {
          if (values[i] !== " ") {
            while (code[index].code[0].line[expectedIndex] === " ") {
              formattedText += " ";
              expectedIndex++;
            }
            formattedText += code[index].code[0].line[expectedIndex];
            expectedIndex++;
          }
        }

        setText(formattedText);
      }
    }
  }, [values, code, text]);

  return (
    <CodeContainer>
      <CodeList>
        {start ? (
          <GlitchText>Press "." in your keyboard to start the game!</GlitchText>
        ) : code[index] ? (
          [...code[index].code].reverse().map((cd: any) => (
            <WindowCard key={cd.id} width="90%" title={cd.id}>
              {cd.active ? (
                <CodeResponseLayout>
                  <CodeResponse>{text}</CodeResponse>
                  <code>{cd.line}</code>
                </CodeResponseLayout>
              ) : (
                <code>{cd.line}</code>
              )}
            </WindowCard>
          ))
        ) : (
          <GlitchText>
            Congratulations you finished the CSS speed run <br /> 🎉✨🎉✨🎉
          </GlitchText>
        )}
      </CodeList>
    </CodeContainer>
  );
};

export default Code;
