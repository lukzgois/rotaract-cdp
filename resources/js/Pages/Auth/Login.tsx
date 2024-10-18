import { useForm } from '@inertiajs/react'

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
      <h1>Login</h1>

      <form onSubmit={submit}>
        <label className="block">
          <span>E-mail</span>
          <input
            type="email"
            value={data.email}
            onChange={e => setData('email', e.target.value)}
          />
          {errors.email && <div>{errors.email}</div>}
        </label>

        <label className="block">
          <span>Senha</span>
          <input
            type="password"
            value={data.password}
            onChange={e => setData('password', e.target.value)}
          />
          {errors.password && <div>{errors.password}</div>}
        </label>

        <button
          type="submit"
          disabled={processing}
        >Login</button>
      </form>
    </>
  )
}

export default Login
