import * as typography from "./typography.json"

export type FamilyTokens = typeof typography.kz.typography.family
export type WeightTokens = typeof typography.kz.typography.weight
export type SizeTokens = {
  fontSize: string
  lineHeight: string
}

export interface Typography {
  kz: {
    family: FamilyTokens
    weight: WeightTokens
    size: {
      display: SizeTokens[]
      text: SizeTokens[]
      mono: SizeTokens[]
    }
  }
}
