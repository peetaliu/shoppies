import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const List = ({ nominations, setNominations, setSaved }) => {
  const [listName, setListName] = useState('')

  const saveList = () => {
    localStorage.setItem(listName, JSON.stringify(nominations))
    const ll = Object.keys(localStorage).map(k => {
      return { [k]: JSON.parse(localStorage.getItem(k)) }
    })
    setSaved(ll)
    setListName('')
    setNominations([])
  }

  return (
    <div id='nomination-list'>
      <InputGroup className='ln-input'>
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
            <OverlayTrigger
              placement='right'
              delay={{ show: 200, hide: 200 }}
              overlay={
                <Tooltip id='tooltip-disabled'>
                  To save your list:
                  <br />- Must have 5 nominations
                  <br />- List name must be unique
                </Tooltip>
              }>
              <span className='btn-wrap'>
                <Button variant='primary' disabled>
                  Save List
                </Button>
              </span>
            </OverlayTrigger>
          )}
        </InputGroup.Append>
      </InputGroup>
      <ListGroup variant='flush'>
        {nominations.map(n => (
          <ListGroup.Item key={n.Id} className='nom-item'>
            <p>
              {n.Title} ({n.Year})
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

export default List
