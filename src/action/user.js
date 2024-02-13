import axios from 'axios'
import { setUser } from '../reducers/userReducer'
import { API_URL } from '../config'

export const registration = async (email, password, gender, bonus) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
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
            const response = await axios.post(`${API_URL}api/auth/login`, {
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
            const response = await axios.get(`${API_URL}api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar =  (file) => {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append("file", file)
            const response = await axios.post(`${API_URL}api/files/avatar`,formData, 
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
            
        } catch (e) {
            console.log(e)
        }
    }
}
export const deleteAvatar =  () => {
    return async dispatch => {
        try {
            
            const response = await axios.delete(`${API_URL}api/files/avatar`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data))
            
        } catch (e) {
            console.log(e)
        }
    }
}



/******************** */

export const addUserAdress = async (adress, email) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/adress`, {
            adress,
            email
        });
        
        return response.data; 
    } catch(e) {
        console.error(e); 
        throw e; 
    }
}

export const addOrderMongoUser = async (dataOrder, sale, email, bonus) => {

    try {
        const response = await axios.post(`${API_URL}api/auth/order`, {
            dataOrder, 
            sale,
            email,
            bonus
        });
        return response.data; 
    } catch(e) {
        console.error(e); 
        throw e; 
    }
}
