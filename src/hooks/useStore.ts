import { useReducer } from 'react'
import { initialState as initialTranslatorState, reducer as translatorReducer } from '../reducers/translator'
import { type Language, type FromLanguage, TranslatorAction } from '../models/types.d'

export const useStore = (): {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
  interchangeLanguagues: () => void
  setFromLanguage: (payload: FromLanguage) => void
  setToLanguage: (payload: Language) => void
  setFromText: (payload: string) => void
  setResult: (payload: string) => void
} => {
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(translatorReducer, initialTranslatorState)

  const interchangeLanguagues = () => { dispatch({ type: TranslatorAction.INTERCHANGE_LANGUAGUES }) }

  const setFromLanguage = (payload: FromLanguage) => { dispatch({ type: TranslatorAction.SET_FROM_LANGUAGE, payload }) }

  const setToLanguage = (payload: Language) => { dispatch({ type: TranslatorAction.SET_TO_LANGUAGE, payload }) }

  const setFromText = (payload: string) => { dispatch({ type: TranslatorAction.SET_FROM_TEXT, payload }) }

  const setResult = (payload: string) => { dispatch({ type: TranslatorAction.SET_RESULT, payload }) }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguagues,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  }
}
