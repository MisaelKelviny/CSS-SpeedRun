import styled from 'styled-components'
import { bgWindows, titleColors } from '../../../Colors'

export const Title = styled.div`
  align-items: center;
  background: linear-gradient(90deg, ${titleColors.PRIMARY}, ${titleColors.SECONDARY});
  display: flex;
  justify-content: space-between;
  padding: 3px 2px 3px 3px;
`
export const Text = styled.div`
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
  margin-right: 24px;
  font-family: "Pixelated MS Sans Serif", Arial;
`

export const Controls = styled.div`
  display: flex;
`

export const Button = styled.button`
  display: block;
  min-height: 14px;
  min-width: 16px;
  padding: 0px;
  background: ${bgWindows.PRIMARY};
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  font-weight: bolder
`
