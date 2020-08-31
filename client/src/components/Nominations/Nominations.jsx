import React from 'react'

const Nominations = ({ nominations, setNominations }) => {
  return (
    <div>
      Nominations
      <ul>
        {nominations.map(n => (
          <li key={n.Id}>
            Title: {n.Title} <br />
            Year: {n.Year}
            <button
              onClick={() =>
                setNominations(nominations.filter(nom => nom.Id !== n.Id))
              }>
              Remove Nomination
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nominations
