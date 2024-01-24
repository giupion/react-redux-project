import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Col,Row } from 'react-bootstrap';

//qua da album page passiamo tutte le canzoni 
const SingleTrack = (props) => {
  const track=props.track;
  const dispatch=useDispatch()
  let clicked=false;
  //prendila porzione di stato che ti interessa, dei preferiti dopo i lcombine
  const favourites = useSelector((state) => state.favourites.favourites);
  //s a hook provided by the react-redux library that allows you to extract data from the Redux store in a functional component.
  //The arrow function passed to useSelector takes the entire Redux state (state) as its argument
  //state.favourites refers to a slice of the Redux state. It assumes that there is a property named favourites in your Redux state, ed è cosi la proprieta si vede,
  //nell'action c'e una proprieta favourite di favourtie
  /*case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }*/
//cioè se favourite esiste come ? e null
      if(favourites&&favourites.length>0)
      for(let i=0;i<favourites.length;i++)//itera array
      {if(favourites[i].id===track.id){clicked=true; 
      break;}} //se presente nei favoriti cio che iterato setta click su true, cosi il pc sa che è cliccato ed è nei favoriti so cosa fare con le action lol
  //clicked condizione da testatre se vero allora
  const handleClick=()=>{
    if(clicked){dispatch({
      type:"REMOVE_FAVOURITE",
      payload:track,//è il carico cioe rappresenta:
    })}
  else{dispatch({
    type:"ADD_FAVOURITE",
    payload:track //sarebbe la proprietà il contenuto
  })
  
  }
  console.log("track",track)
  }
  
      return (
    <div>
       <Row className="py-3 trackHover">
        <Col
          xs={8}
          lg={10}
          className="card-title px-3 m-0 d-block"
          style={{ color: "white" }}
          onClick={() => {
            dispatch({ type: "SELECT_SONG", payload: track });
          }}
        >
          {track.title}
        </Col>
        <Col xs={2} lg={1} className="duration" style={{ color: "white" }}>
          {Math.floor(
            parseInt(track.duration) / 60 // setting the duration minutes
          )}
          :
          {parseInt(track.duration) % 60 < 10
            ? "0" + (parseInt(track.duration) % 60) // checking the duration seconds, if they are less than 10 a 0 is prefixed
            : parseInt(track.duration) % 60}
        </Col>
        <Col xs={2} lg={1}>
          {clicked ? (
            <FaHeart
              color="gold"
              className="ms-3"
              onClick={() => handleClick()}
            />
          ) : (
            <FaRegHeart
              className="text-light ms-3"
              onClick={() => handleClick()}
            />
          )}
        </Col>
      </Row>
    </div>
  )
  }

export default SingleTrack
