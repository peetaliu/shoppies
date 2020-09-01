import React from 'react'
import Result from './Result/Result'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

const Results = ({ results, setNominations, nominations, loading }) => {
  return (
    <div>
      Results
      <ListGroup variant='flush'>
        {loading ? (
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        ) : null}
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
      </ListGroup>
    </div>
  )
}

export default Results
