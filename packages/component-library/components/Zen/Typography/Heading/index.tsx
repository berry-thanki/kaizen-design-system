import classnames from "classnames"
import { BaseProps, HeadingScale, Spacing } from "../../types"
import { Base } from "../Base"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"

const styles = require("./Heading.module.scss")

export const Heading = ({
  tag,
  scale,
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
}: { scale: HeadingScale } & Spacing & BaseProps) => {
  let inferredTag = tag === undefined ? translateScaleToTag(scale) : tag

  let classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
    styles["heading"],
    styles[`heading-${scale}`],
  ]
  otherProps.className = classnames(otherProps.className, classes.join(" "))

  return Base({ tag: inferredTag, children, ...otherProps })
}

const translateScaleToTag = (scale: HeadingScale) => {
  switch (scale) {
    case "0":
    case "1":
      return "h1"
    case "2":
      return "h2"
    case "3":
      return "h3"
    case "4":
      return "h4"
    case "5":
      return "h5"
    case "6":
    default:
      return "h6"
  }
}
