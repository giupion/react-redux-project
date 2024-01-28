import { Row } from "react-bootstrap";
import AlbumList from "./AlbumList";
import FetchAlbumsData from "./FetchAlbumsData"; //questo è i lfetch
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
//react
const Home = () => {
  let metalArtists = [
    
    'bringmethehorizon',
    'trivium',
    'fivefingerdeathpunch',
    'iconforhire',
    'inflames',
    'metallica',
    'sonataartica',
    'apocalyptica',
    'bulletformyvalentine',
    'ironmaiden',
  ]

  let rockArtists = [
    'linkinpark',
    'greenday',
    'riseagainst',
    'imaginedragons',
    'mychemicalromance',
    'paramore',

    
    
  ]

  let AnimeArtists = [
    'natewantstobattle',
    'fabvl',
    'thymeka',
    'dividemusic',
    'oneokrock',
    'elodie',
  ]

  let MarraArtists = [
    'marracash',
    'elodie',
    'sferaebbasta',
    'eminem',
    'massimopericolo',
    'Salmo'
  ]
  const metalAlbum = FetchAlbumsData(metalArtists);
  const rockAlbums = FetchAlbumsData(rockArtists);
  const AnimeAlbums = FetchAlbumsData(AnimeArtists);
const RapAlbums=FetchAlbumsData(MarraArtists);
  const results = useSelector((state) => state.search.searchResults);
  
  useEffect(() => {
    console.log('ciao home')
  })

  return (
    <Row className="col-12 col-md-9" id="mainPage">
      <SearchResults results={results} /> {/*a search result assegni result, risultati ricerca*/}
      <AlbumList title="Heavy-Emotions" albums={metalAlbum} /> {/*sono tutti figli di homepage, di conseguenza passo come props
      ai risultati di ricerca i risultati, alla lista album  passo le costanti a cui è stato fecth ato array contente il nome mi sposto su albumlist e poi su search result */}
      <AlbumList title="Hard-as-Rock" albums={rockAlbums} />
      <AlbumList title="Anime-songs" albums={AnimeAlbums} />
      <AlbumList title="Tipi-duri e rappanti" albums={RapAlbums} />
    </Row>
  );
};

export default Home;
