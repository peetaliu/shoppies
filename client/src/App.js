import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import Saved from './components/Nominations/Saved/Saved'
import ResultList from './components/ResultList/ResultList'
import Nominations from './components/Nominations/Nominations'
import Notification from './components/Notification/Notification'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [notif, setNotif] = useState(null)
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState('Search')
  const [saved, setSaved] = useState([])

  useEffect(() => {
    if (nominations.length === 5) {
      setNotif(
        "Congrats! You've nominated 5 movies for a Shoppy award. You can save your list or remove an entry to continue nominating."
      )
    } else {
      setNotif(null)
    }
  }, [nominations])

  useEffect(() => {
    search.length && !results.length ? setLoading(true) : setLoading(false)
  }, [search, results])

  return (
    // <Container id='App'>
    //   <Notification message={notif} />
    //   <h1>The Shoppies</h1>
    //   <Row>
    //     <Search
    //       setResults={setResults}
    //       setLoading={setLoading}
    //       search={search}
    //       setSearch={setSearch}
    //     />
    //   </Row>
    //   <Row>
    //     <Col>
    // <ResultList
    //   results={results}
    //   search={search}
    //   setNominations={setNominations}
    //   nominations={nominations}
    //   loading={loading}
    // />
    //     </Col>
    //     <Col>
    // <Nominations
    //   nominations={nominations}
    //   setNominations={setNominations}
    // />
    //     </Col>
    //   </Row>
    // </Container>
    <div id='app'>
      <Nav
        variant='pills'
        defaultActiveKey='Search'
        className='flex-column nav'
        onSelect={e => setSelected(e)}>
        <Nav.Item>Shoppies</Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Search'>New List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Saved'>Saved</Nav.Link>
        </Nav.Item>
      </Nav>

      {selected === 'Search' ? (
        <Container fluid className='selected'>
          <Row>
            <Col>
              <Search
                setResults={setResults}
                setLoading={setLoading}
                search={search}
                setSearch={setSearch}
              />
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
                setSaved={setSaved}
                saved={saved}
              />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container fluid>
          <Saved saved={saved} setSaved={setSaved} />
        </Container>
      )}
    </div>
  )
}

export default App
