import { combineReducers } from "redux"

const initialState = window.GLOBALS

export const GLOBAL_ACTIONS = {
    SET_GLOBAL: "SET_GLOBAL",
}

function global(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_ACTIONS.SET_GLOBAL:
            return {
                ...action.global,
            }

        default:
            return state
    }
}

const AppReducer = combineReducers({
    global,
})

export default AppReducer
