import React from 'react'
import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-md-1 bg-dark">
    <Row>
      <Col lg={3} className="d-flex align-items-center offset-md-2">
        <img  alt="album cover" className="mr-3" style={{ width: '60px' }} />
        <div>
          <div className="font-weight-bold text-light"></div>
          <div className='text-light'></div>
        </div>
      </Col>
      <Col lg={7}>
        <Row>
          <Col xs={12} md={8} lg={6} className="offset-md-3 mt-md-1" id="playerControls">
            <Row className="iconsImg justify-content-center">
              <Col xs={1} className="col-sm-1">
                <a href="#">
                  <img src="spotify-start/spotifyredux/public/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
              </Col>
              <Col xs={1} className="col-sm-1">
                <a href="#">
                  <img src="spotify-start/playerbuttons/Previous.png" alt="previous" />
                </a>
              </Col>
              <Col xs={1} className="col-sm-1">
                <a href="#" >
                  <img  />
                </a>
              </Col>
              <Col xs={1} className="col-sm-1">
                <a href="#">
                  <img src="spotify-start/playerbuttons/Next.png" alt="next" />
                </a>
              </Col>
              <Col xs={1} className="col-sm-1">
                <a href="#">
                  <img src="spotify-start/playerbuttons/Repeat.png" alt="repeat" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="row justify-content-center py-3" id="playBar">
          <div className="col-12 col-md-8 col-lg-6">
            <div id="progress">
              <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
          </div>
        </div>
        <audio>
          <source  type="audio/mpeg" />
        </audio>
      </Col>
    </Row>
  </Container>
  )
}

export default Player
