// @ts-nocheck
import * as React from "react"
const styles = require("./NavigationButton.scss")
const titleblockStyles = require("./TitleBlock.scss")
import classNames from "classnames"

export type NavigationButton = {
  buttonText: string
  path: string
  active: boolean
}

type NavigationButtonsProps = {
  navigationButtons: Array<NavigationButton>
  reversed: boolean
}

const NavigationButtons = ({
  navigationButtons,
  reversed,
}: NavigationButtonsProps) => {
  return (
    <React.Fragment>
      {navigationButtons.map(b => (
        <a
          className={classNames({
            [styles.reversed]: reversed,
            [styles.button]: !b.active,
            [styles.activeButton]: b.active,
          })}
          href={b.path}
          key={b.buttonText}
        >
          {b.buttonText}
        </a>
      ))}
    </React.Fragment>
  )
}

// @ts-ignore
NavigationButtons.displayName = "NavigationButtons"

export default NavigationButtons
