import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import ResultList from './components/ResultList/ResultList'
import Nominations from './components/Nominations/Nominations'
import { Row, Col } from 'react-bootstrap'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    search.length && !results.length ? setLoading(true) : setLoading(false)
  }, [search, results])

  return (
    <div id='App'>
      <h1 className='a-left'>The Shoppies</h1>
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
    </div>
  )
}

export default App
