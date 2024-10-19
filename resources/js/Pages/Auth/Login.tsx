import Form from '@/components/ui/form'
import { Head, useForm } from '@inertiajs/react'

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  })

  function submit(e) {
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

            <Form onSubmit={submit} className="space-y-4">
              <label className="block">
                <span className="block mb-2 text-sm font-medium text-gray-900">Seu E-mail</span>

                <Form.TextInput
                  type="email"
                  value={data.email}
                  placeholder="your@email.com"
                  onChange={e => setData('email', e.target.value)}
                />
                {errors.email && <span className="block mt-1 text-red-400 text-sm font-medium text-gray-900">{errors.email}</span>}
              </label>

              <label className="block">
                <span className="block mb-2 text-sm font-medium text-gray-900">Sua Senha</span>

                <Form.PasswordInput
                  type="password"
                  value={data.password}
                  onChange={e => setData('password', e.target.value)}
                />
                {errors.password && <span className="block mt-1 text-red-400 text-sm font-medium text-gray-900">{errors.password}</span>}
              </label>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                disabled={processing}
              >
                Entrar
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
