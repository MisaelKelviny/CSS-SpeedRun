import styled from 'styled-components'
import { mainColors } from './Colors'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`

export const Sidebar = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: minmax(200px,1fr); 
  z-index: 99;
`

export const Contents = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr .2fr 2fr;
  z-index: 99;
`

export const Results = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 99;
  display: flex;
  align-items: center;
`

export const Ground = styled.div`
  position: absolute;
  height: 80vh;
  width: 100%;
  bottom: -92px;
  perspective: 220px;
  transform: scaleX(2);
  z-index: 1;
`
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0.8;
  background-image: linear-gradient(${mainColors.PRIMARY} 2px,transparent 2px), 
                    linear-gradient(to right,${mainColors.PRIMARY} 2px,transparent 2px);    
  background-size: 56px 56px;
  transform-style: preserve-3d;
  transform: rotateX(45deg);
`

export const Game = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background: linear-gradient(0deg, ${mainColors.BACKGROUND_PRIMARY} 26%, ${mainColors.BACKGROUND_SECONDARY} 44%, ${mainColors.BACKGROUND_THIRD} 74%);
`
