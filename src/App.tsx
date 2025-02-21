import useTimer from "easytimer-react-hook";
import React, { useState } from "react";
import Chronometer from "./components/Chronometer";
import Code from "./components/Code";
import Input from "./components/Input";
import { Result } from "./components/Result";
import TimeResults from "./components/TimeResults";
import level from "./level/level.json";
import { CompleteModel } from "./model/Complete";
import {
  Container,
  Contents,
  Game,
  Grid,
  Ground,
  Results,
  Sidebar,
} from "./styles/MainStyle";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [timer, setTimer] = useTimer({
    precision: "secondTenths",
    startValues: {
      minutes: 0,
      seconds: 0,
      secondTenths: 0,
    },
  });

  const stopTimer = () => {
    timer.pause();
  };

  const [inputValue, setInputValue] = useState("");
  const [start, setStart] = useState(true);
  const [codeItem, setCodeItem] = useState(0);
  const [results, setResults] = useState([] as any);
  const [codeCompleted, setCodeCompleted] = useState([] as any);
  const [codes, setCodes] = useState(level);
  const [text, setText] = useState("");

  const changeValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue((e.target as HTMLTextAreaElement).value);
    if (start) {
      setStart(false);
    }
  };

  const keyPress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      codes.length !== 0 &&
      !start &&
      inputValue !== "" &&
      text !== "" &&
      codes[codeItem].code[0].line === text
    ) {
      const c = results;
      c.push(inputValue);
      setResults(c);

      const sliced = codes[codeItem].code.filter((c) => !c.active);
      const comp: Array<CompleteModel> = codeCompleted;
      if (sliced.length === 0) {
        comp.push({
          level: codes[codeItem].level,
          timer: timer
            .getTimeValues()
            .toString(["minutes", "seconds", "secondTenths"]),
          shape: codes[codeItem].shape,
        });
        setCodeCompleted(comp);

        if (codes[codeItem].level === Object.keys(codes).length) {
          stopTimer();
        }

        setCodeItem(codeItem + 1);
        setResults([]);
      } else {
        sliced[0].active = true;
        codes[codeItem].code = sliced;
        setCodes({ ...codes });
      }
      setInputValue("");
      setText("");
    }
  };

  return (
    <Container>
      <Ground>
        <Grid />
      </Ground>
      <Game>
        <Sidebar>
          <Chronometer timer={timer} start={start} />
        </Sidebar>
        <Contents>
          <Code
            values={inputValue}
            code={codes}
            index={codeItem}
            start={start}
            setText={setText}
            text={text}
          />
          <Input
            value={inputValue}
            onChange={changeValue}
            onKeyPress={keyPress}
          />
          <Results>
            <Result
              value={results.join(" ")}
              input={text}
              name={codes[codeItem]?.name}
              level={codes[codeItem]?.className}
              start={start}
            />
          </Results>
        </Contents>
        <TimeResults complete={codeCompleted} />
      </Game>
    </Container>
  );
}

export default App;
