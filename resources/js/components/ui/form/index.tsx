import { ReactNode } from 'react'
import TextInput from './text-input'
import PasswordInput from './password-input'

type Form = {
  children: ReactNode,
  [key: string]: any
}

const Form = ({ children, ...rest }: Form) => {
  return (
    <form {...rest}>

      {children}
    </form>
  )
}

Form.TextInput = TextInput
Form.PasswordInput = PasswordInput

export default Form
