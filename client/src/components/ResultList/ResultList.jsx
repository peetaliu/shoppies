import React from 'react'
import Result from './Result/Result'

const Results = ({ results, setNominations, nominations }) => {
  return (
    <div>
      Results
      <ul>
        {results.Error ? (
          <p>{results.Error}</p>
        ) : (
          results.map(m => (
            <Result
              movie={m}
              setNom={setNominations}
              noms={nominations}
              key={m.Id}
            />
          ))
        )}
      </ul>
    </div>
  )
}

export default Results
