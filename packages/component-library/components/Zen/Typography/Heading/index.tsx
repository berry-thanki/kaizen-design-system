import classnames from "classnames"
import { BaseProps, HeadingLevel, Spacing } from "../../types"
import { Base } from "../Base"
import { responsiveMarginClasses } from "../Spacing/margin"
import { responsivePaddingClasses } from "../Spacing/padding"

const styles = require("./Heading.module.scss")

export const Heading = ({
  tag,
  level,
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
}: { level: HeadingLevel } & Spacing & BaseProps) => {
  let inferredTag = tag === undefined ? translateScaleToTag(level) : tag

  let classes: string[] = [
    ...responsivePaddingClasses({ p, pt, pr, pb, pl, px, py }),
    ...responsiveMarginClasses({ m, mt, mr, mb, ml, mx, my }),
    styles["heading"],
    styles[`heading-${level}`],
  ]
  otherProps.className = classnames(otherProps.className, classes.join(" "))

  return Base({ tag: inferredTag, children, ...otherProps })
}

const translateScaleToTag = (scale: HeadingLevel) => {
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
