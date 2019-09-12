import React from "react"
import Code from "../Code"

class CAPositionExample extends React.PureComponent {
  render() {
    return (
      <Code>{`@import '~@cultureamp/kaizen-component-library/styles/layout';

.my-element {
  @include ca-position($start: $ca-grid, $end: 0, $top: $ca-grid * 2, $bottom: $ca-grid);
}`}</Code>
    )
  }
}

export default CAPositionExample