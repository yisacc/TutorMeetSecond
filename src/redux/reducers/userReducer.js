import * as types from '../actions/actionTypes'
export default function user(state = [], action) {
  switch (action.type) {
    case types.SET_USERID:
      return [...state, { ...action.user }]
    default:
      return state
  }
}
