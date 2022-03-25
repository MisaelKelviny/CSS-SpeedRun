import useTimer from 'easytimer-react-hook'
import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Chronometer from './components/Chronometer'
import Code from './components/Code'
import Input from './components/Input'
import Level from './components/Level'
import { Result } from './components/Result'
import TimeResults from './components/TimeResults'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #121212;
  display: grid;
  grid-template-columns: 1fr 2fr;
  `

const Sidebar = styled.div`
  height: 100vh;
  background: #1e1e1e;
  display: grid;
  grid-template-rows: minmax(200px,1fr) minmax(70px, 1fr) minmax(200px, 3fr); 
  `

const Contents = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr
  `

function App() {
  const [timer, setTimer] = useTimer({
    precision: 'secondTenths',
    startValues: {
      minutes: 0,
      seconds: 0,
      secondTenths: 0,
    }
  });

  const startTimer = () => {
    timer.start({ precision: 'secondTenths' });
  }

  const stopTimer = () => {
    let fin = []
    fin.push({
      time: timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']),
      level: codes[0].nivel
    })
    setFinishTime(fin)
    timer.stop();
  }

  const [inputValue, setInputValue] = useState("")
  const [codeItem, setCodeItem] = useState(0)
  const [finishTime, setFinishTime] = useState([])
  const [codeCompleted, setCodeCompleted] = useState([])
  const [codes, setCodes] = useState([{
    nivel: 1,
    name: "The circle",
    code: [
      {
        id: 1,
        line: "{ width: 100px; height: 100px; background: red; border-radius: 50% }",
        active: true
      }
    ]
  },
  {
    nivel: 2,
    name: "The Egg",
    code: [
      {
        id: 1,
        line: "{ display: block; \
          width: 126px; \
          height: 180px; \
          background-color: red; \
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%; }",
        active: true
      }
    ]
  }])

  const changeValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const keyPress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue == codes[codeItem].code[0].line.slice(0, inputValue.length)) {
      let comp = codeCompleted
      comp.push({
        ...codes[codeItem].code[0],
        timer: timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])
      })
      setCodeCompleted(comp)

      let sliced = [{ ...codes[codeItem], code: codes[codeItem].code.slice(1) }]
      if (sliced[codeItem].code.length > 0) {
        sliced.code[0].active = true
      } else {
        stopTimer()
      }
      setCodes(sliced)
      setInputValue("")
    }
  }

  return (
    <Container>
      <Sidebar>
        <Code values={inputValue} code={codes} />
        <Input value={inputValue} onChange={changeValue} onKeyPress={keyPress} />
        <TimeResults complete={codeCompleted} />
      </Sidebar>
      <Contents>
        <Chronometer timer={timer} startTimer={startTimer} />
        <Result value={inputValue.replace("{", "").replace("}", "")} name={codes[0].name} />
        <Level completed={finishTime} />
      </Contents>
    </Container>
  )
}

export default App
