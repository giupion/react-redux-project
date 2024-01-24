import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//gli passo titolo e album da homepage e cosa farci...beh prendo album singolo e stampo come un pazzo //react
const AlbumList = ({title,albums}) => {//estraggo elemento array da 0 a 3
  return (
    <div className="col-12 pb-3 mt-5">
      <h2 className="text-white">{title}</h2>
      <Row className="imgLinks py-3 d-flex justify-content-between">
{albums.length>0 && albums.slice(0,4).map((singleAlbum)=>(console.log(singleAlbum)))}

      </Row>
    </div>
  )
}

export default AlbumList

