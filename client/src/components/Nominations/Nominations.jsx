import React, { useState, useEffect } from 'react'
import Notification from '../Notification/Notification'
import List from './List/List'
import Saved from './Saved/Saved'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Nominations = ({ nominations, setNominations }) => {
  const [display, setDisplay] = useState('home')
  const [saved, setSaved] = useState([])
  const [notif, setNotif] = useState(null)

  useEffect(() => {
    if (nominations.length === 5) {
      setNotif(
        "Congrats! You've nominated 5 movies for a Shoppy award. You can save your list or remove an entry to continue nominating."
      )
    } else {
      setNotif(null)
    }
  }, [nominations])

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
    <div id='nominations'>
      <Notification message={notif} />
      <h4>Nominations</h4>
      <Tabs id='nom-tab' activeKey={display} onSelect={k => setDisplay(k)}>
        <Tab eventKey='home' title='New List'>
          <List
            nominations={nominations}
            setNominations={setNominations}
            saved={saved}
            setSaved={setSaved}
          />
        </Tab>
        <Tab eventKey='saved' title={`Saved Lists (${saved.length})`}>
          <Saved saved={saved} handleDel={delList} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Nominations
