import React from 'react'
import Result from './Result/Result'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

const Results = ({ results, setNominations, nominations, loading, search }) => {
  return (
    <div id='resultList'>
      {search ? `Results for "${search.trim()}"` : 'Results'}
      <ListGroup variant='flush'>
        {loading ? (
          <Spinner animation='border' role='status' className='spinner'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : null}
        {results.filter(e => e.Error).length ? (
          <p>{results[0].Error}</p>
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
      </ListGroup>
    </div>
  )
}

export default Results
