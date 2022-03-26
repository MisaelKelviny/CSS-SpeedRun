import useTimer from 'easytimer-react-hook'
import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import Chronometer from './components/Chronometer'
import Code from './components/Code'
import Input from './components/Input'
import { Result } from './components/Result'
import TimeResults from './components/TimeResults'

const colorGrid = "#f200b7"
const colorGridShadow = "#ff00c0"
const bgColorPrimary = "#1d022f"
const bgColorSecondary = "#e92c90"
const bgColorThird = "#8b1579"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`

const Sidebar = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(200px,1fr); 
  z-index: 99;
`

const Contents = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr .2fr 2fr;
  z-index: 99;
`

const Results = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 99;
  display: flex;
  align-items: center;
`

const Ground = styled.div`
  position: absolute;
  height: 80vh;
  width: 100%;
  bottom: -92px;
  perspective: 220px;
  transform: scaleX(2);
  z-index: 1;
`
const Grid = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-image: linear-gradient(${colorGrid} 2px,transparent 2px), 
                    linear-gradient(to right,${colorGrid} 2px,transparent 2px);    
  background-size: 56px 56px;
  transform-style: preserve-3d;
  transform: rotateX(45deg);
`

const Game = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: linear-gradient(0deg, ${bgColorPrimary} 26%, ${bgColorSecondary} 44%, ${bgColorThird} 74%);
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

  const stopTimer = () => {
    let fin = []
    fin.push({
      time: timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']),
      level: codes[0].nivel
    })
    setFinishTime(fin)
    timer.pause();
  }

  const [inputValue, setInputValue] = useState("")
  const [start, setStart] = useState(true)
  const [codeItem, setCodeItem] = useState(0)
  const [results, setResults] = useState([])
  const [finishTime, setFinishTime] = useState([])
  const [codeCompleted, setCodeCompleted] = useState([])
  const [codes, setCodes] = useState([{
    nivel: 1,
    name: "The circle",
    code: [
      {
        id: 1,
        line: ".circle{ width: 100px; height: 100px; background: yellow; border-radius: 50% }",
        active: true
      }
    ],
    className: 'circle'
  },
  {
    nivel: 2,
    name: "The Pentagon",
    code: [
      {
        id: 1,
        line: ".pentagon{ position: relative; width: 54px; box-sizing: content-box; border-width: 50px 18px 0; border-style: solid; border-color: red transparent; }",
        active: true
      },
      {
        id: 2,
        line: ".pentagon:before{ content: ''; position: absolute; height: 0; width: 0; top: -85px; left: -18px; border-width: 0 45px 35px; border-style: solid; border-color: transparent transparent red; }",
        active: false
      }
    ],
    className: 'pentagon'
  },
  {
    nivel: 3,
    name: "The Star",
    code: [
      {
        id: 1,
        line: ".star{ margin: 50px 0; position: relative; display: block; color: red; width: 0px; height: 0px; border-right: 100px solid transparent; border-bottom: 70px solid red; border-left: 100px solid transparent; transform: rotate(35deg); }",
        active: true
      },
      {
        id: 2,
        line: ".star:before{ content: ''; border-bottom:80px solid red; border-left: 30px solid transparent; border-right: 30px solid transparent; position: absolute; height: 0; width: 0; top: -45px; left: -65px; display: block; transform: rotate(-35deg); }",
        active: false
      },
      {
        id: 3,
        line: ".star:after{ content: ''; position: absolute; display: block; color: red; top: 3px; left: -105px; width: 0px; height: 0px; border-right: 100px solid transparent; border-bottom: 70px solid red; border-left: 100px solid transparent; transform: rotate(-70deg); }",
        active: false
      }
    ],
    className: 'star'
  }])

  const changeValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setInputValue(e.target.value)
    if (start) {
      setStart(false)
    }
  }

  function removeItem(index, arr) {
    return arr.slice(index)
  }

  const keyPress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (codes.length != 0 &&
      !start &&
      inputValue != "" &&
      codes[codeItem].code[0].line.slice(0, inputValue.length) == inputValue) {

      let c = results
      c.push(inputValue)
      setResults(c)

      let sliced = codes[codeItem].code.filter(c => !c.active)
      let comp = codeCompleted
      if (sliced.length === 0) {
        // codes[codeItem]['code'] = sliced
        comp.push({
          nivel: codes[codeItem]['nivel'],
          timer: timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])
        })

        setCodeItem(codeItem + 1)
        codes[codeItem] = {}
        setCodes({ ...codes })
        setCodeCompleted(comp)

        if (codes[codeItem].nivel === codes.length) {
          stopTimer()
        }
        setResults([])
      } else {
        sliced[0].active = true
        codes[codeItem]['code'] = sliced
        setCodes({ ...codes })
      }
      setInputValue("")
    }
  }

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
          />
          <Input
            value={inputValue}
            onChange={changeValue}
            onKeyPress={keyPress}
          />
          <Results>
            <Result
              value={results.join(" ")}
              input={inputValue}
              name={codes[codeItem]?.name}
              level={codes[codeItem]?.className}
              start={start}
            />
          </Results>
        </Contents>
        <TimeResults complete={codeCompleted} />
      </Game>
    </Container>
  )
}

export default App
