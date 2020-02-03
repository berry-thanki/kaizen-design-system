// @ts-nocheck
import { storiesOf } from "@storybook/react"
import * as React from "react"
import { ToggledStatus, ToggleSwitchField, ToggleTheme } from "../draft"

type ChildrenRenderProps = {
  // @ts-ignore
  toggledStatus: ToggledStatus
  toggle: () => void
}

interface ToggleStateContainerProps {
  initialToggledStatus: ToggledStatus
  children: (renderProps: ChildrenRenderProps) => React.ReactNode
}

interface ToggleStateContainerState {
  toggledStatus: ToggledStatus
}

class ToggleStateContainer extends React.Component<
  ToggleStateContainerProps,
  ToggleStateContainerState
> {
  state = {
    toggledStatus: this.props.initialToggledStatus,
  }
  toggle = () => {
    const { toggledStatus } = this.state
    const newStatus =
      toggledStatus === ToggledStatus.ON ? ToggledStatus.OFF : ToggledStatus.ON
    this.setState({ toggledStatus: newStatus })
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "0.2rem",
        }}
      >
        {this.props.children({
          toggledStatus: this.state.toggledStatus,
          toggle: this.toggle,
        })}
      </div>
    )
  }
}

const RtlContainer = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl">{children}</div>
)

storiesOf("ToggleSwitchField (React)", module)
  .add("On (Kaizen Site Demo)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      )}
    </ToggleStateContainer>
  ))
  .add("Off", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
        />
      )}
    </ToggleStateContainer>
  ))
  .add("On (RTL)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <RtlContainer>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
          />
        </RtlContainer>
      )}
    </ToggleStateContainer>
  ))
  .add("Off (RTL)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
      {({ toggledStatus, toggle }) => (
        <RtlContainer>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
          />
        </RtlContainer>
      )}
    </ToggleStateContainer>
  ))
  .add("Disabled On", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
        />
      )}
    </ToggleStateContainer>
  ))
  .add("Disabled Off", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          disabled
        />
      )}
    </ToggleStateContainer>
  ))
  .add("Disabled On (RTL)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <RtlContainer>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
            disabled
          />
        </RtlContainer>
      )}
    </ToggleStateContainer>
  ))
  .add("Disabled Off (RTL)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.OFF}>
      {({ toggledStatus, toggle }) => (
        <RtlContainer>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
            disabled
          />
        </RtlContainer>
      )}
    </ToggleStateContainer>
  ))
  .add("Full width", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <div style={{ width: "100%" }}>
          <ToggleSwitchField
            labelText="Label"
            toggledStatus={toggledStatus}
            onToggle={toggle}
            fullWidth
          />
        </div>
      )}
    </ToggleStateContainer>
  ))
  .add("Full width (RTL)", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <div style={{ width: "100%" }}>
          <RtlContainer>
            <ToggleSwitchField
              labelText="Label"
              toggledStatus={toggledStatus}
              onToggle={toggle}
              fullWidth
            />
          </RtlContainer>
        </div>
      )}
    </ToggleStateContainer>
  ))
  .add("Freemium theme", () => (
    <ToggleStateContainer initialToggledStatus={ToggledStatus.ON}>
      {({ toggledStatus, toggle }) => (
        <ToggleSwitchField
          labelText="Label"
          toggledStatus={toggledStatus}
          onToggle={toggle}
          theme={ToggleTheme.FREEMIUM}
        />
      )}
    </ToggleStateContainer>
  ))
