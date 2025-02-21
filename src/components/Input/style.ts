import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-items: center;
  padding: 10px;
`;

export const InputValue = styled.input`
  height: 30px;
  width: 84%;
  border-radius: 5px;
`;

export const Button = styled.div`
  padding: 8px;
  background: #ff00cf;
  border-radius: 3px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  line-height: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  margin: 0em;
  padding-block: 1px;
  padding-inline: 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonborder;
  border-image: initial;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
`;
