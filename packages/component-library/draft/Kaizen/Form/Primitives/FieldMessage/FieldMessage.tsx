// @ts-nocheck
import classnames from "classnames"
import * as React from "react"

const styles = require("./styles.scss")

export type FieldMessageStatus = "default" | "success" | "error"
export type FieldMessageProps = {
  id?: string
  automationId?: string
  message?: string
  status?: FieldMessageStatus
  reversed?: boolean
}

const FieldMessage: React.SFC<FieldMessageProps> = ({
  id,
  automationId,
  message,
  status = "default",
  reversed = false,
}) => (
  <div
    id={id}
    data-automation-id={automationId}
    className={classnames(styles.message, {
      [styles.reversed]: reversed,
      [styles.default]: status === "default",
      [styles.error]: status === "error",
    })}
  >
    {message}
  </div>
)

export { FieldMessage }
