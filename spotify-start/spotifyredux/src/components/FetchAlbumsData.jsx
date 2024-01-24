import { useState, useEffect } from "react";
//react
const FetchAlbumsData = (artists) => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    let foundAlbums = [];
    let selectedArtists = [];

    while (selectedArtists.length < 4) {
      let artist = artists[Math.floor(Math.random() * artists.length)]; // select an element from the array with an index between 0 and 7
      if (!selectedArtists.includes(artist)) { // checks if the artist is not already present in the array
        selectedArtists.push(artist);//pusha in questo caso
      }
    }
    for (let i = 0; i < selectedArtists.length; i++) {
      let artist = selectedArtists[i];
      console.log(selectedArtists[i]) //mischia elementi array cosicche fa i lfetch di ogni artista

      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}&type=album`
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.data);
          foundAlbums = foundAlbums.concat(data.data[0]);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (foundAlbums.length > 0) {
      setAlbums(foundAlbums);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return albums;
};

export default FetchAlbumsData;
