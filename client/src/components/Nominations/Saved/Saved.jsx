import React from 'react'
import SavedList from './SavedList/SavedList'
import ListGroup from 'react-bootstrap/ListGroup'

const Saved = ({ saved, handleDel }) => {
  return (
    <div id='saved'>
      <ListGroup variant='flush'>
        {saved &&
          saved.map(mList => (
            <SavedList
              listName={Object.keys(mList)}
              listItems={mList[Object.keys(mList)]}
              handleDel={handleDel}
              key={Object.keys(mList)}
            />
          ))}
      </ListGroup>
    </div>
  )
}

export default Saved
