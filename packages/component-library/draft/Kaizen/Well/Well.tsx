// @ts-nocheck
import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type VariantType =
  | "positive"
  | "negative"
  | "informative"
  | "cautionary"
  | "default"

export type BorderStyleType = "solid" | "dashed" | "none"

export interface WellProps {
  id?: string
  automationId?: string
  variant?: VariantType
  borderStyle?: BorderStyleType
  noMargin?: boolean
}

const Well: React.FunctionComponent<WellProps> = ({
  id,
  automationId,
  children,
  variant = "default",
  borderStyle = "solid",
  noMargin = false,
}) => (
  <div
    id={id}
    data-automation-id={automationId}
    className={classnames(
      styles.container,
      styles[borderStyle],
      styles[variant],
      noMargin && styles.noMargin
    )}
  >
    {children}
  </div>
)

export { Well }
