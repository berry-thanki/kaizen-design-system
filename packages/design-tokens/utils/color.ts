import { ColorNames, ColorTokens } from "../tokens/color"
import * as tokens from "../tokens/color.json"

export const color: <N extends ColorNames>(
  name: N,
  variant: keyof ColorTokens[N]
) => string = (n, v) => tokens.kz.color[n][String(v)]
