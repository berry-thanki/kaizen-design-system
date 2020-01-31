import * as React from "react"
import GenericNotification, {
  NotificationType,
} from "./components/GenericNotification"

export type GlobalNotificationProps = {
  type: NotificationType
  children: React.ReactNode
  onHide?: () => void
  automationId?: string
}

const GlobalNotification = (props: GlobalNotificationProps) => (
  <GenericNotification style="global" persistent={false} {...props} />
)

export { GlobalNotification }
