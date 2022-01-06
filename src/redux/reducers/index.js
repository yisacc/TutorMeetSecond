import { combineReducers } from "redux"
import user from "./userReducer"
import { cities } from "./citiesReducer"
import { IDTypes } from "./typesReducer"
import { Subjects } from "./subjectsReducer"

const rootReducer = combineReducers({
  user,
  cities,
  IDTypes,
  Subjects,
})

export default rootReducer
