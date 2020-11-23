import ActionTypes from './types'

export const setSearchfield = text => ({
  type: ActionTypes.CHANGE_SEARCHFIELD,
  payload: text
})

export const requestRobots = () => dispatch => {
  dispatch({type: ActionTypes.REQUEST_ROBOTS_PENDING})
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(robots => dispatch({type: ActionTypes.REQUEST_ROBOTS_SUCCESS, payload: robots}))
    .catch(err => dispatch({type: ActionTypes.REQUEST_ROBOTS_FAILURE, payload: err}))
}