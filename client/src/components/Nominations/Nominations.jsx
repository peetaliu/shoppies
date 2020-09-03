import React, { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Nominations = ({ nominations, setNominations }) => {
  const [saved, setSaved] = useState({})
  const [listName, setListName] = useState()

  console.log('noms', nominations)
  useEffect(() => {
    if (localStorage.length) {
      setSaved({ ...localStorage })
    }
  }, [])

  // console.log('saved: ', saved)
  // console.log('saved parsed: ', Object.keys(saved))

  return (
    <div id='nominations'>
      <h4>Nominations</h4>
      <label htmlFor='list-name'>
        <p>List Name</p>
      </label>
      <InputGroup className='mb-3'>
        <FormControl
          name='list'
          id='list-name'
          value={listName}
          onChange={target => setListName(target.value)}
        />
        <InputGroup.Append>
          <Button variant='primary'>Save List</Button>
        </InputGroup.Append>
      </InputGroup>
      <ListGroup variant='flush'>
        {nominations.map(n => (
          <ListGroup.Item key={n.Id} className='nom-item'>
            <p>
              Title: {n.Title} <br />
              Year: {n.Year}
            </p>
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
