import { type SectionType } from '../../models/types'

export interface ITextAreaProps {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

export interface IGetPlaceholder {
  type: SectionType
  loading?: boolean
}
