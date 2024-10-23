import cn from "@/utils/cn"

type TextInput = {
  type: "text" | "email"
  error: boolean
  className?: string
  [key: string]: any
}

const TextInput = ({
  type = "text",
  error = false,
  className = "",
  ...rest
}: TextInput) => {
  return (
    <input
      className={cn(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        { "bg-red-50 border border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500": error },
        className
      )}
      type={type}
      {...rest}
    />
  )
}

export default TextInput
