import cn from "@/utils/cn"
import { ReactNode } from "react"

type LabelProps = {
  children: ReactNode
  text?: string
  error?: boolean
}

const Label = ({ children, text = "", error = false }: LabelProps) => {
  return (
    <label className="block">
      <span
        className={cn(
          "block mb-2 text-sm font-medium text-gray-900",
          { "text-red-700": error }
        )}
      >{text}</span>

      {children}
    </label>
  )
}

export default Label
