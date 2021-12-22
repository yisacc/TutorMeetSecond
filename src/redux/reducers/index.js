import { combineReducers } from "redux"
import user from "./userReducer"
import { cities } from "./citiesReducer"
import { IDTypes } from "./typesReducer"

const rootReducer = combineReducers({
  user,
  cities,
  IDTypes,
})

export default rootReducer
