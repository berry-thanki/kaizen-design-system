import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

type InlineNotificationProps = {
  type: NotificationType
  title: string
  children: React.ReactNode
  autohide?: boolean
  autohideDelay?: "short" | "long"
  persistent: boolean
  hideCloseIcon: boolean
  onHide?: () => void
  automationId?: string
  noBottomMargin?: boolean
}

const InlineNotification = ({
  persistent,
  hideCloseIcon,
  ...otherProps
}: InlineNotificationProps) => (
  <GenericNotification
    style="inline"
    persistent={persistent || hideCloseIcon}
    {...otherProps}
  />
)

InlineNotification.defaultProps = {
  autohideDelay: "short",
  autohide: false,
  hideCloseIcon: false,
  persistent: false,
}

export { InlineNotification }
