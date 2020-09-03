import React from 'react'
import Result from './Result/Result'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

const Results = ({ results, setNominations, nominations, loading, search }) => {
  return (
    <div id='resultList'>
      <h4>{search ? `Results for "${search.trim()}"` : 'Results'}</h4>
      <ListGroup variant='flush'>
        {loading ? (
          <Spinner
            animation='border'
            role='status'
            variant='primary'
            className='spinner'>
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
