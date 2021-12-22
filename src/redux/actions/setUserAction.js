import * as types from "./actionTypes"
export const addUser = user => ({
  type: types.SET_USERID,
  user,
})
