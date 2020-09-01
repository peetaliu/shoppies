import React from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

const Result = ({ movie, setNom, noms }) => {
  const addNom = () => {
    setNom(noms.concat(movie))
  }

  const btn = () => {
    if (noms.length >= 5 || noms.find(n => n.Id === movie.Id)) {
      return (
        <Button variant='primary' onClick={addNom} disabled>
          Nominate
        </Button>
      )
    } else {
      return (
        <Button variant='primary' onClick={addNom}>
          Nominate
        </Button>
      )
    }
  }
  return (
    <ListGroup.Item>
      Title: {movie.Title} <br />
      Year: {movie.Year}
      {btn()}
    </ListGroup.Item>
  )
}

export default Result
