import React from 'react'

const Results = props => {
  return (
    <div>
      Results
      <ul>
        {props.results.map(m => (
          <li key={m.Id}>
            Title: {m.Title}
            Year: {m.Year}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Results
