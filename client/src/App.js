import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import ResultList from './components/ResultList/ResultList'
import Nominations from './components/Nominations/Nominations'
import Notification from './components/Notification/Notification'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [notif, setNotif] = useState(null)

  useEffect(() => {
    if (nominations.length === 5) {
      setNotif('5 noms')
      setTimeout(() => {
        setNotif(null)
      }, 5000)
    }
  }, [nominations])

  return (
    <div>
      <Notification message={notif} />
      <h1>Shoppies</h1>
      <Search setResults={setResults} />
      <div>
        <ResultList
          results={results}
          setNominations={setNominations}
          nominations={nominations}
        />
        <Nominations
          nominations={nominations}
          setNominations={setNominations}
        />
      </div>
    </div>
  )
}

export default App
