import ActionTypes from './types'

const initialStateSearch = {
  searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case ActionTypes.CHANGE_SEARCHFIELD:
      return {
        ...state, 
        searchField: action.payload
      }
    default:
      return state
  }
} 

const initialStateRobots = {
  isPending: false,
  robots: [],
  err: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case ActionTypes.REQUEST_ROBOTS_PENDING:
      return {
        ...state, 
        isPending: true
      }
    case ActionTypes.REQUEST_ROBOTS_SUCCESS:
      return {
        ...state, 
        robots: action.payload,
        isPending: false
      }
    case ActionTypes.REQUEST_ROBOTS_FAILURE:
      return {
        ...state, 
        err: action.payload,
        isPending: false
      }
    default:
      return state
  }
} 