import styled from 'styled-components';

interface InputProps {
  onKeyPress: any,
  onChange: any
}

const InputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-items: center;
  padding: 10px;
`

const InputValue = styled.input`
  height: 25px;
  width: 100%;
  border-radius: 5px;
`

const Button = styled.input`
  padding: 8px;
  background: #ff00cf;
  border-radius: 3px;
`

const Form = styled.form`
  display: flex;
  width: 100%;
`

const Input = ({ onKeyPress, onChange, value }: InputProps) => {
  return (
    <InputContainer>
      <Form onSubmit={onKeyPress}>
        <InputValue value={value} type="text" onChange={onChange} />
        <Button type="submit" value="⚡" />
      </Form>
    </InputContainer>
  );
}

export default Input;