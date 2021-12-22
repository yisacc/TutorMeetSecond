import * as types from "../actions/actionTypes"
export const IDTypes = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ID_TYPE:
      return [...state, action.IDTypes]
    default:
      return state
  }
}
