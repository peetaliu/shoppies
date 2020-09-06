import React, { useState } from 'react'
import omdbService from '../../../services/omdbService'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { Container, Row, Col } from 'react-bootstrap'

const Result = ({ movie, setNom, noms }) => {
  const [detailsToggle, setDetailsToggle] = useState(false)
  const [details, setDetails] = useState({})

  const getDetails = async id => {
    const result = await omdbService.populate(id)
    setDetails(result)
  }

  const addNom = () => {
    setNom(noms.concat(movie))
  }

  const toggleDetails = () => {
    if (!detailsToggle) {
      getDetails(movie.Id)
    }
    setDetailsToggle(!detailsToggle)
  }

  const nomBtn = () => {
    if (noms.length >= 5 || noms.find(n => n.Id === movie.Id)) {
      return (
        <Button variant='primary' onClick={addNom} disabled className='nom-btn'>
          Nominate
        </Button>
      )
    } else {
      return (
        <Button variant='primary' onClick={addNom} className='nom-btn'>
          Nominate
        </Button>
      )
    }
  }

  if (!detailsToggle) {
    return (
      <ListGroup.Item id='result'>
        <Container fluid>
          <Row className='overview'>
            <Col>
              <p className='info'>
                {movie.Title} ({movie.Year})
              </p>
              <Button onClick={toggleDetails} className='toggle'>
                More info
              </Button>
            </Col>
            {nomBtn()}
          </Row>
        </Container>
      </ListGroup.Item>
    )
  } else {
    return (
      <ListGroup.Item id='result'>
        <Container fluid>
          <Row className='overview'>
            <Col>
              <p className='info'>
                {movie.Title} ({movie.Year})
              </p>
              <Button onClick={toggleDetails} className='toggle'>
                Collapse
              </Button>
            </Col>
            {nomBtn()}
          </Row>
          <Row className='detailed'>
            <Col>
              <div className='detailed-info'>
                <img
                  src={details.Poster}
                  alt={details.Title}
                  className='movie-img'
                />
              </div>
            </Col>
            <Col>
              <p>
                <strong>Released:</strong> {details.Released} <br />
                <strong>Directed By:</strong> {details.Director} <br />
                <strong>Plot:</strong> {details.Plot} <br />
                <strong>Rating:</strong> {details.imdbRating}/10
                <p>
                  <a
                    href={`https://www.imdb.com/title/${details.imdbID}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='imdb-Link'>
                    imdb Listing
                  </a>
                </p>
              </p>
            </Col>
          </Row>
        </Container>
      </ListGroup.Item>
    )
  }
}

export default Result
