import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import ResultList from './components/ResultList/ResultList'
import Nominations from './components/Nominations/Nominations'
import Notification from './components/Notification/Notification'
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [notif, setNotif] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (nominations.length === 5) {
      setNotif(
        "Congrats! You've nominated 5 movies for a Shoppy award. You can save your list or remove an entry to continue nominating."
      )
    } else {
      setNotif(null)
    }
  }, [nominations])

  return (
    <Container id='App'>
      <Notification message={notif} />
      <h1>The Shoppies</h1>
      <Row>
        <Search
          setResults={setResults}
          setLoading={setLoading}
          search={search}
          setSearch={setSearch}
        />
      </Row>
      <Row>
        <Col>
          <ResultList
            results={results}
            search={search}
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
