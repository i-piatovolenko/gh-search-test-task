import {SearchActionsType} from "../models/models";

const initialState = ["test"]

export const searchReducer = (state = initialState, action: SearchActionsType) => {
  switch (action.type) {
    default: return state
  }
}