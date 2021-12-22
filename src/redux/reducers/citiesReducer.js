import * as types from "../actions/actionTypes"
export const cities = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CITY:
      return [...state, action.cities]
    default:
      return state
  }
}
