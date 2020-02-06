import * as tokens from "./color.json"

export type ColorTokens = typeof tokens.kz.color
export type DeprecatedColorTokens = typeof tokens.kz.DEPRECATED.color
export type ColorNames = keyof ColorTokens

export interface Color {
  kz: {
    color: ColorTokens
    DEPRECATED: {
      color: DeprecatedColorTokens
    }
  }
}

export const colorTokens: Color = tokens
