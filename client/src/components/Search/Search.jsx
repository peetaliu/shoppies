import React, { useState, useEffect } from 'react'
import omdbService from '../../services/omdbService'

const Search = props => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getResults = async () => {
      props.setResults([])
      if (search.trim()) {
        const result = await omdbService.search({ search: search.trim() })
        console.log('result: ', result)

        result.Search &&
          props.setResults(
            result.Search.map(m => ({
              Title: m.Title,
              Year: m.Year,
              Id: m.imdbID,
            }))
          )
      }
    }
    getResults()
  }, [search])
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
