import React, { useEffect } from 'react'
import SavedList from './SavedList/SavedList'
import ListGroup from 'react-bootstrap/ListGroup'

const Saved = ({ saved, setSaved }) => {
  const loadLocalStorage = () => {
    if (localStorage.length) {
      const ll = Object.keys(localStorage).map(k => {
        return { [k]: JSON.parse(localStorage.getItem(k)) }
      })
      setSaved(ll)
    } else {
      setSaved([])
    }
  }
  useEffect(() => {
    loadLocalStorage()
  }, [setSaved])

  const delList = key => {
    localStorage.removeItem(key)
    loadLocalStorage()
  }
  return (
    <div id='saved'>
      <ListGroup variant='flush'>
        {saved &&
          saved.map(mList => (
            <SavedList
              listName={Object.keys(mList)}
              listItems={mList[Object.keys(mList)]}
              handleDel={delList}
              key={Object.keys(mList)}
              loadLocalStorage={loadLocalStorage}
            />
          ))}
      </ListGroup>
    </div>
  )
}

export default Saved
