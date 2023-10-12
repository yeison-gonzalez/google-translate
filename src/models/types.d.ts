import { type AUTO_LANGUAGUE, type SUPPORTED_LANGUAGUES } from '../constants/constants'

export type Language = keyof typeof SUPPORTED_LANGUAGUES
export type AutoLanguage = typeof AUTO_LANGUAGUE
export type FromLanguage = Language | AutoLanguage

export interface ITranslatorState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export enum TranslatorAction {
  INTERCHANGE_LANGUAGUES = 'INTERCHANGE_LANGUAGUES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT',
}

export type TranslatorActions =
  | { type: TranslatorAction.INTERCHANGE_LANGUAGUES }
  | { type: TranslatorAction.SET_FROM_LANGUAGE, payload: FromLanguage }
  | { type: TranslatorAction.SET_TO_LANGUAGE, payload: Language }
  | { type: TranslatorAction.SET_FROM_TEXT, payload: string }
  | { type: TranslatorAction.SET_RESULT, payload: string }

export enum SectionType {
  From = 'from',
  To = 'to'
}
