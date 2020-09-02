import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Nominations = ({ nominations, setNominations }) => {
  return (
    <div id='nominations'>
      Nominations
      <ListGroup variant='flush'>
        {nominations.map(n => (
          <ListGroup.Item key={n.Id}>
            Title: {n.Title} <br />
            Year: {n.Year}
            <Button
              variant='primary'
              onClick={() =>
                setNominations(nominations.filter(nom => nom.Id !== n.Id))
              }>
              Remove Nomination
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Nominations
