import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGUE, SUPPORTED_LANGUAGES } from '../../constants/constants'
import { type ILanguageSelectorProps } from '../models/LanguageSelector'
import { SectionType, type Language } from '../../models/types.d'

export const LanguageSelector = ({ type, onChange, value }: ILanguageSelectorProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGUE}>Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
