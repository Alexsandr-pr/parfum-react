import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const registration = async (email, password, gender, bonus) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            email,
            password,
            gender,
            bonus
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}


export const login =  (email, password, remember) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user)) 
            remember && localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}


/******************** */

export const addUserAdress = async (adress, email) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/adress`, {
            adress,
            email
        });
        
        return response.data; 
    } catch(e) {
        console.error(e); 
        throw e; 
    }
}

export const addOrderMongoUser = async (dataOrder, sale, email) => {

    try {
        const response = await axios.post(`http://localhost:5000/api/auth/order`, {
            dataOrder, 
            sale,
            email
        });
        return response.data; 
    } catch(e) {
        console.error(e); 
        throw e; 
    }
}
