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
   
    "Access-Control-Allow-Origin": "*",

"Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",

"Access-Control-Allow-Headers": "*",
  });

  
 
//la funzione è asincrona dal flusso
  const fetchAlbum = async () => {
    try {
     // fetch() inizia una richiesta e returns una  promise:cioe lo stato , l'esito dell'operazione e il suo valore di ritorno.
     //quando la richiesta è completa, la promise è risolta  con l'oggetto response. se la richiesta fallisca a causa di problemi di network la promise è rifiutata
      const response = await fetch( //il fetch deve aspettare la richiesta , si ha il response e si infila la dentro!!!NB
       // the asynchronous function is paused until the request completes. con await la funzione deve aspettare il fetch, il processo fino a quando si ha l'oggetto response scaturito dalla promise
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=marracash`,
        {
          method: "GET",
          headers: headers,
           
           options: {
            
            "Access-Control-Allow-Origin": "*",

            "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
            
            "Access-Control-Allow-Headers": "*",
         }
        }
      );//se response 200 Ricapitolando: l’esecutore parte automaticamente e tenta di eseguire un compito. Quando l’esecuzione termina, viene invocato resolve in caso di successo, oppure reject in caso di errore.
      //let promise = new Promise(function(resolve, reject) {
  // esecutore (il codice produttore, "cantante")

      if (response.ok) {
        const data = await response.json();
        //response.json() is a method of the Response object that allows a JSON object to be extracted from the response.
        //response json ritorna una promise quindi  si usa await cioe si aspetta che la promise venga esaudita

        //
   /* response.json() returns a promise resolved to a JSON object
    response.text() returns a promise resolved to raw text
    response.formData() returns a promise resolved to FormData
    response.blob() returns a promise resolved to a Blob (a file-like object of raw data)
    response.arrayBuffer()() returns a promise resolved to an ArryBuffer (raw generic binary data)*/

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




        {albumDaMostrare&& (
          <Container fluid id="mainPage" className=" mt-5 d-flex align-center justify-content-center">
            <Row className=" d-flex align-center justify-content-center">
                  <Col md={6} className="mb-5 text-center " id="trackList">
                    
                  {albumDaMostrare.data.map((track) => (console.log(track),
                      <>
                      <h1 key={track.id}>
                        {track.title}
                      </h1>
                      <img
                      src={track.album.cover}
                      className="card-img img-fluid"
                      alt="Album"
                    />
                    <div className="mt-4 text-center">
                      <p className="album-title"></p>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="album-title">{track.artist.name}</p>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="album-title">{track.album.title}</p>
                    </div>
                    <div className="text-center">
                    <p className="album-title">{track.id}</p>
                    </div>
                    <div className="mt-4 text-center">
                      <button id="btnPlay" className="btn btn-success" type="button">
                        Play
                      </button>
                    </div>
                    </>
                    ))}
                  
                  </Col>
                </Row>
            
          </Container>
        ) }
      </div>
    );

}

export default AlbumPage;
