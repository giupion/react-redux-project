import {useEffect,useState} from "react";
import {Col,Container,Row} from "react-bootstrap";
import{Link,useParams} from "react-router-dom"


//async prima della funzione ...cioe non è nel normale flusso con await diciamo aspetta! intervieni alla fine del fetch
//fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. If the request fails due to some network problems, the promise is rejected.
const AlbumPage = () => {
  const params = useParams();
  const [albumDaMostrare, setAlbumDaMostrare] = useState(null);

  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    
  });

  
 

  const fetchAlbum = async () => {
    try {
      //async prima della funzione ...cioe non è nel normale flusso con await diciamo aspetta! intervieni alla fine del fetch
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`,
        {
          method: "GET",
          headers: headers,
           
           options: {
             'Access-Control-Allow-Origin': '*',
         }
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAlbumDaMostrare(data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);


    return (
      <div>
        {albumDaMostrare? (
          <Container fluid id="mainPage">
            <Row>
              <Col md={3} className="pt-5 text-center" id="img-container">
                <img
                  src={albumDaMostrare.data[0].album.cover}
                  className="card-img img-fluid"
                  alt="Album"
                />
                <div className="mt-4 text-center">
                  <p className="album-title"></p>
                </div>
                <div className="mt-4 text-center">
                  <p className="album-title">{albumDaMostrare.data[0].title}</p>
                </div>
                <div className="text-center">
                <p className="album-title">{albumDaMostrare.data[0].id}</p>
                </div>
                <div className="mt-4 text-center">
                  <button id="btnPlay" className="btn btn-success" type="button">
                    Play
                  </button>
                </div>
              </Col>
              <Col md={8} className="p-md-5">
                <Row>
                  <Col md={10} className="mb-5" id="trackList">
                   
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        ) : null}
      </div>
    );

}

export default AlbumPage;
