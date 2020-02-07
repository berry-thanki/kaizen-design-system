import { color } from "./color"

const baseTypography = {
  color: color("wisteria", "500"),
}

export interface HeadingProps {
  level: string
}

export const heading = ({ level }: HeadingProps) => ({
  ...baseTypography,
})

export const paragraph = {
  ...baseTypography,
}

export const pre = {
  ...baseTypography,
}
