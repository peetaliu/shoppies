import React, { useState, useEffect } from 'react'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Nominations from './components/Nominations/Nominations'
import './App.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [nominations, setNominations] = useState([])

  return (
    <div>
      <h1>Shoppies</h1>
      <Search />
      <div>
        <Results />
        <Nominations />
      </div>
    </div>
  )
}

export default App
