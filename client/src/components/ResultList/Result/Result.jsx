import React from 'react'

const Result = ({ movie, setNom, noms }) => {
  const addNom = () => {
    setNom(noms.concat(movie))
  }

  const btn = () => {
    if (noms.length >= 5 || noms.find(n => n.Id === movie.Id)) {
      return (
        <button onClick={addNom} disabled>
          Nominate
        </button>
      )
    } else {
      return <button onClick={addNom}>Nominate</button>
    }
  }
  return (
    <li>
      Title: {movie.Title} <br />
      Year: {movie.Year}
      {btn()}
    </li>
  )
}

export default Result
