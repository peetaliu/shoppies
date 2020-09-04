import React, { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Nominations = ({ nominations, setNominations }) => {
  const [saved, setSaved] = useState({})
  const [listName, setListName] = useState('')

  useEffect(() => {
    if (localStorage.length) {
      setSaved({ ...localStorage })
    }
  }, [])

  const loadLists = () => {
    const ll = Object.keys(localStorage).map(k => {
      return { [k]: JSON.parse(localStorage.getItem(k)) }
    })

    return ll
  }

  const saveList = () => {
    localStorage.setItem(listName, JSON.stringify(nominations))
    setSaved({ ...localStorage })
    setListName('')
  }

  return (
    <div id='nominations'>
      <h4>Nominations</h4>
      <InputGroup className='mb-3'>
        <FormControl
          name='list'
          id='list-name'
          value={listName}
          placeholder='List Name'
          onChange={({ target }) => setListName(target.value)}
        />
        <InputGroup.Append>
          {listName &&
          nominations.length === 5 &&
          !Object.keys(localStorage).includes(listName) ? (
            <Button variant='primary' onClick={saveList}>
              Save List
            </Button>
          ) : (
            <Button variant='primary' disabled>
              Save List
            </Button>
          )}
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
