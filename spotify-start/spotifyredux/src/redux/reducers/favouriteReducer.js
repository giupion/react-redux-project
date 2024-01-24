const initialState = {
  favourites: []
}
//stato iniziale favourite array vuoto, poi lo switch gestisce il tipo di azione nel caso il tipo sia add ..fa una copia 
//dello stato e aggiunge all'array favourite lo stato dei favoriti e aggiunge il nuovo favorito presente in cation payload
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter(
            favourite => favourite!== action.payload
        )
      }
    default: //caso di default nel quale in pratica l'handler delle action ,il reducer return stato inalternato perche azione non riconosciuta per esempio
    //il reducer modifica l ostato in base all'azione
      return state
  }
}

export default favouritesReducer
