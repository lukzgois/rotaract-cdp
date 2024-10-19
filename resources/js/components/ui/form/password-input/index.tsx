type PasswordInput = {
  [key: string]: any
}

const PasswordInput = ({
  type = "password",
  ...rest
}: PasswordInput) => {
  return (
    <input
      type="password"
      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      placeholder="••••••••"
      {...rest}
    />
  )
}

export default PasswordInput
