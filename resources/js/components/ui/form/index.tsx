import { ReactNode } from 'react'
import Label from './label'
import TextInput from './text-input'
import PasswordInput from './password-input'
import ErrorLabel from './error-label'

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
Form.Label = Label
Form.ErrorLabel = ErrorLabel

export default Form
