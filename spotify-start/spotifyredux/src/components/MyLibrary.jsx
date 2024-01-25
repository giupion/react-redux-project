import { useSelector } from "react-redux"
import SingleTrack from "./SingleTrack" 


const MyLibrary = () => {
const favourites=useSelector((state)=>state.favourites.favourites) //è lo stato aggiornato favourites,favourites si vede dal reducer
  return (
    <div className="col.12 mt-5">
      <h2 className="text-light">Dark Compendium</h2> 
   {/*nel mio caso un array di  elementi questo è favourite */}
   
    {console.log(favourites)}
    {favourites.map((track)=>(
        <SingleTrack key={track.id} track={track}/>
    ))}
    </div>
  )
}

export default MyLibrary
