import classnames from "classnames"
import * as React from "react"
import { BaseProps, Spacing } from "../types"
import { responsiveMarginClasses } from "../Typography/Spacing/margin"
import { responsivePaddingClasses } from "../Typography/Spacing/padding"

export const Box = ({
  children,
  style,
  tag, // @TODO - customisable
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
}: Spacing & BaseProps & { style?: any }) => {
  let classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
  ]

  return (
    <div
      style={Object.assign({}, style, {
        border: "2px dotted #C4C5D4",
        borderRadius: "3px",
      })}
      className={classnames(classes.join(" "))}
    >
      {children}
    </div>
  )
}
