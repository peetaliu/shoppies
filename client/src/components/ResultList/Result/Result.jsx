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
        <Button variant='primary' onClick={addNom} disabled className='nom-btn'>
          Nominate
        </Button>
      )
    } else {
      return (
        <Button variant='primary' onClick={addNom} className='nom-btn'>
          Nominate
        </Button>
      )
    }
  }
  return (
    <ListGroup.Item id='result'>
      <p className='info'>
        Title: {movie.Title} <br />
        Year: {movie.Year}
      </p>
      {btn()}
    </ListGroup.Item>
  )
}

export default Result
