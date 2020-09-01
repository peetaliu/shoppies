import React, { useState, useEffect } from 'react'
import omdbService from '../../services/omdbService'

const Search = ({ setResults, setLoading }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setResults([])
    if (search.trim()) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    const getResults = async () => {
      const result = await omdbService.search({ search: search.trim() })
      if (result && search.trim()) {
        if (result.Error) {
          setResults({ Error: result.Error })
          setLoading(false)
        } else {
          result.Search &&
            setResults(
              result.Search.map(m => ({
                Title: m.Title,
                Year: m.Year,
                Id: m.imdbID,
              }))
            )
          setLoading(false)
        }
      }
    }
    getResults()
  }, [search, setResults, setLoading])

  return (
    <div>
      <h3>Movie Title</h3>
      <input
        type='text'
        value={search}
        name='Search'
        onChange={({ target }) => setSearch(target.value)}
        id='search'
      />
    </div>
  )
}

export default Search
