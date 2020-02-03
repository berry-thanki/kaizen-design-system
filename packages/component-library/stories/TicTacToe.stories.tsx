import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import * as React from "react"

import TicTacToeCell from "../components/TicTacToe"

const stories = storiesOf("Components", module)

stories.add(
  "TicTacToe",
  withInfo({ inline: true })(() => (
    <TicTacToeCell
      value="X"
      position={{ x: 0, y: 0 }}
      onClick={action("onClick")}
    />
  ))
)
