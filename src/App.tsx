import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGUE } from './constants/constants'
import { ArrowsIcons, LanguageSelector, TextArea } from './components'
import { SectionType } from './models/types.d'

function App () {
  const {
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
  } = useStore()

  return (
    <Container fluid>
      <h2>Google translate</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGUE} onClick={interchangeLanguagues}>
            <ArrowsIcons />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea
              type={SectionType.To}
              loading={loading}
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
