const initialState = {
    selectedSong: []
}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        //imposti il reducer come porzione di combinereducers
        case 'SELECT_SONG':
            return {
              ...state,
                selectedSong: action.payload
            }
        default:
            return state
    }
}

export default playerReducer