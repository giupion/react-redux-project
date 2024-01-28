import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from '../reducers/searchReducer'
import playerReducer from '../reducers/playerReducer'
import favouritesReducer from '../reducers/favouriteReducer'

const store = configureStore({
  reducer: combineReducers({
    search: searchReducer,
    player: playerReducer,  /*(property) player: (state: {
      selectedSong: never[];
  } | undefined, action: any) => {
      selectedSong: any;
  }*/ 
    favourites: favouritesReducer
  })
})

export default store
