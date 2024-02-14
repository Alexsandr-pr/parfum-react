const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const MODAL_TRUE = "MODAL_TRUE"
const MODAL_FALSE = "MODAL_FALSE"

const defaultState = {
    currentUser: {},
    isAuth: false,
    modal: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case MODAL_TRUE: {
            return {
                ...state,
                modal: true
            }
        }
        case MODAL_FALSE: {
            return {
                ...state,
                modal: false
            }
        }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const modalActive = () => ({type: MODAL_TRUE})
export const modalOnActive = () => ({type: MODAL_FALSE})
