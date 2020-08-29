import React from 'react'

const Search = props => {
  return (
    <div>
      <h3>Movie Title</h3>
      <input value={props.search} onChange={props.handler} />
    </div>
  )
}

export default Search
