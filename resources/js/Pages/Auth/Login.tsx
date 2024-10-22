import Button, { ButtonState } from '@/components/ui/button'
import Form from '@/components/ui/form'
import Label from '@/components/ui/form/label'
import { Head, useForm } from '@inertiajs/react'
import { ChangeEvent } from 'react'

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  function submit(e: SubmitEvent) {
    e.preventDefault()
    post('/login')
  }

  return (
    <>
      <Head title="Login" />

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Entre na sua conta
            </h1>

            <Form onSubmit={submit} className="space-y-4 md:space-y-6">
              <Label text="Seu E-mail" error={!!errors.email}>
                <Form.TextInput
                  type="email"
                  value={data.email}
                  error={!!errors.email}
                  placeholder="seu@email.com"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setData('email', e.target.value)}
                />

                <Form.ErrorLabel>{errors.email}</Form.ErrorLabel>
              </Label>

              <Label text="Sua Senha" error={!!errors.password}>
                <Form.PasswordInput
                  type="password"
                  error={!!errors.password}
                  value={data.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setData('password', e.target.value)}
                />
                <Form.ErrorLabel>{errors.password}</Form.ErrorLabel>
              </Label>

              <Button
                type="submit"
                disabled={processing}
                state={processing ? ButtonState.Processing : ButtonState.Normal}
              >
                Entrar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
