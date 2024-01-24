import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
//gli passo titolo e album da homepage e cosa farci...beh prendo album singolo e stampo come un pazzo //react
const AlbumList = ({title,albums}) => {//estraggo elemento array da 0 a 3
  return (
    <div className="col-12 mt-5">
      <h2 className="text-white">{title}</h2>
      <Row className="imgLinks py-3 d-flex justify-content-between me-5">
{albums.length>0 && albums.slice(0,4).map((singleAlbum)=>(<Col className=" me-5 mb-3" key={singleAlbum.album.id} xs={12} md={6} lg={3} >
  <div>

    <img src={singleAlbum.album.cover_medium}/>
    <div className="d-flex flex-column">
  <Link
    className="h5 text-light"
          to={"/album/" + singleAlbum.album.id}
                >{singleAlbum.album.title}</Link>
<Link
                  className="h6 text-light"
                  to={"/artist/" + singleAlbum.artist.id}
                >
                  {singleAlbum.artist.name}
                </Link>
                </div> 
                </div>      
</Col>))}


      </Row>
    </div>
  )
}

export default AlbumList

