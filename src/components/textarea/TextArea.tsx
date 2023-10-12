import { Form } from 'react-bootstrap'
import { type IGetPlaceholder, type ITextAreaProps } from '../models/TextArea'
import { SectionType } from '../../models/types.d'

const commonStyles = { border: 0, height: '200px', reSize: 'none' }

const getPlaceholder = ({ type, loading }: IGetPlaceholder) => {
  if (type === SectionType.From) return 'Introducir texto'
  if (type === SectionType.To && loading === true) return 'Cargando...'
  return 'Traducción'
}

export const TextArea = ({ type, loading, value, onChange }: ITextAreaProps) => {
  const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      autoFocus={type === SectionType.From}
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
