import classnames from "classnames"
import { BaseProps, Scale, Spacing } from "../../types"
import { Base } from "../Base"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"

const styles = require("./Link.module.scss")

export const Link = ({
  tag = "a",
  href = "#",
  scale,
  target,
  children,
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
  ...otherProps
}: {
  target?: "_self" | "_blank" | "_parent" | "_top"
  href?: string
  rel?: string
  scale?: Scale
} & BaseProps &
  Spacing) => {
  if (target !== undefined) {
    // avoid exploitation of the window.opener API
    otherProps.rel = "noreferrer noopener"
  }

  let classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
  ]

  otherProps.className = classnames(
    otherProps.className,
    styles.link,
    classes.join(" ")
  )

  return Base({ tag, children, ...otherProps })
}
