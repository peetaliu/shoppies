import React, { useEffect } from 'react'
import omdbService from '../../services/omdbService'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Search = ({ setResults, setLoading, search, setSearch }) => {
  useEffect(() => {
    setResults([])
    const getResults = async () => {
      const result = await omdbService.search({ search: search.trim() })
      if (result.Error) {
        if (search.trim()) {
          setResults([result])
        } else {
          setResults([])
        }
      } else {
        result.Search &&
          setResults(
            result.Search.map(m => ({
              Title: m.Title,
              Year: m.Year,
              Id: m.imdbID,
            }))
          )
      }
    }
    getResults()
  }, [search, setResults, setLoading])

  return (
    <div id='search'>
      <label htmlFor='search-bar'>Movie Title</label>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <i className='fa fa-search'></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={search}
          name='Search'
          onChange={({ target }) => setSearch(target.value)}
          id='search-bar'
          placeholder='Enter a movie title'
        />
      </InputGroup>
    </div>
  )
}

export default Search
