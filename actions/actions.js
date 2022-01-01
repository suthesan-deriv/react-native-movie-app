export const LOAD_COMING_SOON = 'LOAD_COMING_SOON'
export const ADD_FAVOURITES = 'ADD_FAVOURITES'

export const ADD_FAVOURITES_SUCCESS = 'ADD_FAVOURITES_SUCCESS'
export const LOAD_COMING_SOON_SUCCESS = 'LOAD_COMING_SOON_SUCCESS'

export const loadComingSoon = () => ({
    type: LOAD_COMING_SOON
})

export const addToFavourites = (item) => ({
    type: ADD_FAVOURITES,
    item
})
