import * as types from "../actions/actionTypes"
export const Subjects = (state = [], action) => {
  switch (action.type) {
    case types.ADD_Subjects:
      return [...state, action.Subjects]
    default:
      return state
  }
}
