const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const MODAL_REGISTRATION_TRUE = "MODAL_TRUE";
const MODAL_REGISTRATION_FALSE = "MODAL_FALSE";
const MODAL_FALSE_TRUE = "MODAL_FALSE_TRUE";
const MODAL_FALSE_FALSE = "MODAL_FALSE_FALSE";


const defaultState = {
    currentUser: {},
    isAuth: false,
    modal: false,
    modalFalse: false
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
        case MODAL_REGISTRATION_TRUE: {
            return {
                ...state,
                modal: true
            }
        }
        case MODAL_REGISTRATION_FALSE: {
            return {
                ...state,
                modal: false
            }
        }
        case MODAL_FALSE_TRUE: {
            return {
                ...state,
                modalFalse: true
            }
        }
        case MODAL_FALSE_FALSE: {
            return {
                ...state,
                modalFalse: false
            }
        }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const modalTrueActive = () => ({type: MODAL_REGISTRATION_TRUE})
export const modalTrueNoActive = () => ({type: MODAL_REGISTRATION_FALSE})
export const modalActiveError = () => ({type: MODAL_FALSE_TRUE})
export const modalNoActiveError = () => ({type: MODAL_FALSE_FALSE})
