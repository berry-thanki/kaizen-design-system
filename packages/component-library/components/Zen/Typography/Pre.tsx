import classnames from "classnames"
import { BaseProps } from "../types"
import { Base } from "./Base"

const styles = require("./Base.module.scss")

// @TODO - convert this to a proper component
export const Pre = ({ tag = "pre", children, ...otherProps }: BaseProps) => {
  otherProps.className = classnames(otherProps.className, styles.pre)

  return Base({ tag, children })
}
