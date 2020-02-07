import { createElement } from "react"
import { AllowedTags } from "../types"

export const Base = ({
  tag,
  children,
  ...otherProps
}: {
  tag: keyof AllowedTags
  children: React.ReactNode
}) => {
  return createElement(tag, otherProps, children)
}
