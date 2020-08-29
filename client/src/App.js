import React, { useState } from 'react'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Nominations from './components/Nominations/Nominations'

import './App.css'

const App = () => {
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])

  const addNominations = e => {}

  return (
    <div>
      <h1>Shoppies</h1>
      <Search setResults={setResults} />
      <div>
        <Results results={results} />
        <Nominations nominations={nominations} />
      </div>
    </div>
  )
}

export default App
