
import { ADD_EMP, DELETE_EMP, EDIT_EMP, SEARCH_FILTER, UPDATE_EMP } from "./type"

export const addEmp = (data)  => {    
    return {
        type: ADD_EMP,
        payload: {
            data: data
        }       
        }
}

export const editEmp = (id) => {
    return {
        type: EDIT_EMP,
        id
        }
}

export const updateEmp = (id, data) => {
    return {
        type: UPDATE_EMP,         
            id,
            data        
    }
}

export const searchFilter = (data) => {
    return {
        type: SEARCH_FILTER,
        data
    }
}

export const deleteEmp = (index) => {
    return {
        type: DELETE_EMP,
        index
    }
}


