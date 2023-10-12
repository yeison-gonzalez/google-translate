import { type SectionType, type FromLanguage, type Language } from '../../models/types'

interface ILanguageSelectorFrom {
  type: SectionType.From
  value: FromLanguage
  onChange: (language: FromLanguage) => void
}

interface ILanguageSelectorTo {
  type: SectionType.To
  value: Language
  onChange: (language: Language) => void
}

export type ILanguageSelectorProps = ILanguageSelectorFrom | ILanguageSelectorTo
