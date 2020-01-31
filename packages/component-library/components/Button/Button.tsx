import * as React from "react"
import GenericButton, { ButtonProps } from "./components/GenericButton"

const Button: React.FunctionComponent<ButtonProps> = props => (
  <GenericButton {...props} />
)

Button.displayName = "Button"

export { Button, ButtonProps }
