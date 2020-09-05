import React from 'react'
import List from './List/List'

const Nominations = ({ nominations, setNominations, saved, setSaved }) => {
  return (
    <div id='nominations'>
      <h4>Nominations</h4>
      <List
        nominations={nominations}
        setNominations={setNominations}
        saved={saved}
        setSaved={setSaved}
      />
    </div>
  )
}

export default Nominations
