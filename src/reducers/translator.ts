import { AUTO_LANGUAGUE } from '../constants/constants'
import { type TranslatorActions, type ITranslatorState, TranslatorAction } from '../models/types.d'

export const initialState: ITranslatorState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

export const reducer = (state: ITranslatorState, action: TranslatorActions) => {
  const { type } = action
  switch (type) {
    case TranslatorAction.INTERCHANGE_LANGUAGUES: {
      if (state.fromLanguage === AUTO_LANGUAGUE) return state
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }
    }
    case TranslatorAction.SET_FROM_LANGUAGE:
      return {
        ...state,
        fromLanguage: action.payload
      }
    case TranslatorAction.SET_TO_LANGUAGE:
      return {
        ...state,
        toLanguage: action.payload
      }
    case TranslatorAction.SET_FROM_TEXT:
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    case TranslatorAction.SET_RESULT:
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    default:
      return state
  }
}
