import React, { useEffect } from 'react'
import SavedList from './SavedList/SavedList'
import ListGroup from 'react-bootstrap/ListGroup'

const Saved = ({ saved, setSaved }) => {
  useEffect(() => {
    if (localStorage.length) {
      const ll = Object.keys(localStorage).map(k => {
        return { [k]: JSON.parse(localStorage.getItem(k)) }
      })
      setSaved(ll)
    } else {
      setSaved([])
    }
  }, [setSaved])

  return (
    <div id='saved'>
      <ListGroup variant='flush'>
        {saved &&
          saved.map(mList => (
            <SavedList
              listName={Object.keys(mList)}
              listItems={mList[Object.keys(mList)]}
              key={Object.keys(mList)}
              saved={saved}
              setSaved={setSaved}
            />
          ))}
      </ListGroup>
    </div>
  )
}

export default Saved
