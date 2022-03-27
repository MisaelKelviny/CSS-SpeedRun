import { Button, Form, InputContainer, InputValue } from './style'

interface InputProps {
  onKeyPress: () => void,
  onChange: () => void,
  onKeyDown: () => void,
  value: string
}

const Input = ({ onKeyPress, onChange, value }: InputProps) => {
  return (
    <InputContainer>
      <Form onSubmit={onKeyPress}>
        <InputValue value={value} type="text" onChange={onChange} />
        <Button type="submit" value="⚡" />
      </Form>
    </InputContainer>
  )
}

export default Input
