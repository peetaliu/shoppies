import React from 'react'
import Button from 'react-bootstrap/Button'

const Nominations = ({ nominations, setNominations }) => {
  return (
    <div>
      Nominations
      <ul>
        {nominations.map(n => (
          <li key={n.Id}>
            Title: {n.Title} <br />
            Year: {n.Year}
            <Button
              variant='primary'
              onClick={() =>
                setNominations(nominations.filter(nom => nom.Id !== n.Id))
              }>
              Remove Nomination
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nominations
