import { ReactNode } from "react"

const ErrorLabel = ({ children }: { children: ReactNode }) => {
  return (
    <span className="block mt-1 text-red-700 text-sm font-medium">{children}</span>
  )
}

export default ErrorLabel
