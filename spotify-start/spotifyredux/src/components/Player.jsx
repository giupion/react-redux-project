import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";

const Player = () => {
 const song=useSelector((state)=>state.player.selectedSong); 
 console.log(song)
 
 /*
 const store: EnhancedStore<{
    search: {
        searchResults: any;
    };
    player: {
        selectedSong: any; !!!!
    };
    favourites: {
        favourites: any[];
    };
},
 
 (property) player: (state: {
  selectedSong: never[];
} | undefined, action: any) => {
  selectedSong: any;
} PORZIONE DELLO STATO PRESA DALLO STORE COMBINEREDUCERS*/ 
const coverSmall=song.album&&song.album.cover_small;//deve esistere essere true sia album che cover.small cosi si evita che tiri un errore e appare solo nel caso esistano entrambi
const title=song.title||""; //se song è falso lo setta in una stringa vuolta se è null undefinde cosi si ha  sempre una string
const artistName=(song.artist&&song.artist.name) || "";

  return (
    <Container fluid className="fixed-bottom bg-container pt-md-1">
      <Row>
        <Col lg={3} className="d-flex align-items-center offset-md-2">
        <img src={coverSmall} alt="album cover" className="mr-3 me-3" style={{ width: '60px' }} />
          <div>
            <div className="font-weight-bold text-light">{title}</div>
            <div className='text-light'>{artistName}</div>
          </div>
        </Col>
        <Col lg={7}>
          <Row>
            <Col xs={12} md={8} lg={6} className="offset-md-3 mt-md-1" id="playerControls">
              <Row className=" justify-content-center">
                <Col xs={1} className="col-sm-1">
                  <a href="#">
                    <img src={require('../playerbuttons/Shuffle.png')} alt="shuffle" />
                  </a>
                </Col>
                <Col xs={1} className="col-sm-1">
                  <a href="#">
                    <img src={require('../playerbuttons/Previous.png')} alt="previous" />
                  </a>
                </Col>
                <Col xs={1} className="col-sm-1">
                 <a>
                    <img src={require('../playerbuttons/Play.png')} alt="play/pause" />
                  </a>
                </Col>
                <Col xs={1} className="col-sm-1">
                  <a href="#">
                    <img src={require('../playerbuttons/Next.png')} alt="next" />
                  </a>
                </Col>
                <Col xs={1} className="col-sm-1">
                  <a href="#">
                    <img src={require('../playerbuttons/Repeat.png')} alt="repeat" />
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
         
        </Col>
      </Row>
    </Container>
  );
};

export default Player;


