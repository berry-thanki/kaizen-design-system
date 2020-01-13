import classnames from "classnames"
import { BaseProps, Scale, Spacing } from "../../types"
import { Base } from "../Base"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"

const styles = require("./Paragraph.module.scss")

export const Paragraph = ({
  tag = "p",
  children,
  scale = "md",
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
  scale?: Scale
} & Spacing &
  BaseProps) => {
  let classes: string[] = [
    "paragraph",
    ...responsiveSizeClasses(scale),
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
  ]

  otherProps.className = classnames(otherProps.className, classes.join(" "))

  return Base({ tag, children, ...otherProps })
}

/**
 * Generates responsive size classes
 * e.g. {mobile: 'md', desktop: 'xl'} => .size-md--mobile .size-xl--desktop
 * @param scale
 */
const responsiveSizeClasses = (scale: Scale): string[] => {
  let classes: string[] = []
  if (typeof scale === "string") {
    classes.push(styles[`size-${scale}`])
  } else {
    Object.keys(scale).forEach(key => {
      classes.push(styles[`size-${scale[key]}--${key}`])
    })
  }

  return classes
}
