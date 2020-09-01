import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import ResultList from './components/ResultList/ResultList'
import Nominations from './components/Nominations/Nominations'
import Notification from './components/Notification/Notification'
import { Container, Row, Col } from 'react-bootstrap'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [notif, setNotif] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (nominations.length === 5) {
      setNotif('5 noms')
      setTimeout(() => {
        setNotif(null)
      }, 5000)
    }
  }, [nominations])

  return (
    <Container>
      <Notification message={notif} />
      <h1>Shoppies</h1>
      <Row>
        <Search setResults={setResults} setLoading={setLoading} />
      </Row>
      <Row>
        <Col>
          <ResultList
            results={results}
            setNominations={setNominations}
            nominations={nominations}
            loading={loading}
          />
        </Col>
        <Col>
          <Nominations
            nominations={nominations}
            setNominations={setNominations}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
