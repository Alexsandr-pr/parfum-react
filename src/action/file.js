import axios from "axios";
import { addFile, setFiles } from "../reducers/fileReducer";

export function getFiles(dirId) {
    return async dispatch => {
        try {
            console.log("respondse")
            
            const response = await axios.get(`http://localhost:5000/api/files${dirId ? "?parent="+dirId : ""}`, {
                headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}
            })
            dispatch(setFiles(response.data))
            console.log(response.data)
        } catch(e) {
            
        }
    }
}

export function uploadFile(file, dirId) {
    return async dispatch => {
        try {
            const formData = new FormData()
            formData.append('file', file)
            if (dirId) {
                formData.append('parent', dirId)
            }
            const response = await axios.post(`http://localhost:5000/api/files/upload`, formData, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
                
            });
            dispatch(addFile(response.data))
        } catch (e) {
            
        }
    }
}