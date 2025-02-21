import { Button, InputContainer, InputValue, InputWrapper } from "./style";

interface InputProps {
  onKeyPress: any;
  onChange: any;
  value: string;
}

const Input = ({ onKeyPress, onChange, value }: InputProps) => {
  return (
    <InputContainer>
      <InputWrapper>
        <InputValue
          value={value}
          type="text"
          onChange={onChange}
          onKeyUp={onKeyPress}
        />
        <Button>⚡</Button>
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
