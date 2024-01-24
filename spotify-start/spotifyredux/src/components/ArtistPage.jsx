import React from 'react'
import { Link,useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { Alert,Row,Col } from 'react-bootstrap';

const ArtistPage = () => {
  const params=useParams();//setto il params per passare id alla route
  const[artistToShow,setArtistToShow]=useState(null)
  const[topTracks,setTropTracks]=useState([])
  const[dataLoaded,setDataLoaded]=useState(false)
  return (
    <div>
      
    </div>
  )
}

export default ArtistPage
