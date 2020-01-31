import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

export type ToastNotificationProps = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide: boolean
  autohideDelay?: "short" | "long"
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
}

const ToastNotification = ({
  hideCloseIcon,
  ...otherProps
}: ToastNotificationProps) => {
  const persistent = otherProps.autohide && hideCloseIcon

  return (
    <GenericNotification
      style="toast"
      persistent={persistent}
      {...otherProps}
    />
  )
}

ToastNotification.defaultProps = {
  autohide: false,
  hideCloseIcon: false,
  autohideDelay: "short",
}

export { ToastNotification }
