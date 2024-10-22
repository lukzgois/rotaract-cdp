import cn from "@/utils/cn"

type PasswordInput = {
  error: boolean
  [key: string]: any
}

const PasswordInput = ({
  error = false,
  ...rest
}: PasswordInput) => {
  return (
    <input
      type="password"
      className={cn(
        "bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5",
        { "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500": error }
      )}
      placeholder="•••••••••••"
      {...rest}
    />
  )
}

export default PasswordInput
