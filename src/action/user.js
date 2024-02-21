import axios from 'axios'
import { logout, setUser } from '../reducers/userReducer'
import { API_URL } from '../config'
import { modalTrueActive } from '../reducers/userReducer'
import {modalActiveError}  from '../reducers/userReducer';


export const registration = async (email, password, gender, bonus, dispatch) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            email,
            password,
            gender,
            bonus
        })
        dispatch(modalTrueActive())
    } catch (e) {
        dispatch(modalActiveError())
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


export const deleteUser = () => {
    return async dispatch => {
        try {
            await axios.delete(
                `${API_URL}api/auth/delete`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            );
            dispatch(logout());
        } catch (e) {
            console.error(e); 
        }
    };
};

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

export const changeUserPassword = async (password, newPassword, dispatch) => {
        const formData = new FormData()
        formData.append("password", password)
        formData.append("newPassword", newPassword)
        try {
            const response = await axios.post(`${API_URL}api/auth/change`,formData,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            
            dispatch(setUser(response.data))
            return response
        } catch(e) {
            return e
        }
}
/******************** */
export const addComment = async (arr, id) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/comment`,
            { arr, id },
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
        );
        return response;
    } catch(e) {
        return e
    }
};


/******************** */

export const addUserAdress = async (adress) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/adress`, {adress}, 
            { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
        );
        return response.data; 
    } catch(e) {
        console.error(e); 
        throw e; 
    }
}

export const addOrderMongoUser = async (dataOrder, sale = 0, email, bonus) => {
    try {
        console.log(dataOrder, sale , email, bonus)
        const response = await axios.post(`${API_URL}api/auth/order`, {
            dataOrder, 
            sale,
            email,
            bonus
        });
        return response.data; 
    } catch(e) {
        return alert("Error")
    }
}

export const addOrderMongoNoUser = async (dataOrder) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/order/nouser`, {
            dataOrder
        });
        return response.data; 
    } catch(e) {
        return alert("Error")
    }
}

