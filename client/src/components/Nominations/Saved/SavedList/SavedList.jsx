import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const SavedList = ({ listName, listItems, handleDel }) => {
  const [show, setShow] = useState(false)

  if (!show) {
    return (
      <ListGroup.Item className='saved-list' onClick={() => setShow(!show)}>
        <div className='saved-list__heading' onClick={() => setShow(!show)}>
          {listName}
          <Button variant='danger' onClick={() => handleDel(listName)}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>
    )
  } else {
    return (
      <ListGroup.Item className='saved-list'>
        <div className='saved-list__heading' onClick={() => setShow(!show)}>
          {listName}
          <Button variant='danger' onClick={() => handleDel(listName)}>
            Delete
          </Button>
        </div>
        <ListGroup variant='flush' className='saved-list__item-group'>
          {listItems.map(i => (
            <ListGroup.Item key={i.Id} className='saved-list__item'>
              {i.Title} ({i.Year})
            </ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
    )
  }
}

export default SavedList
