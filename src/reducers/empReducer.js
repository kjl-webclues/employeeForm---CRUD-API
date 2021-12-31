import { ADD_EMP, DELETE_EMP, EDIT_EMP, UPDATE_EMP, SEARCH_FILTER } from "../actions/type";

const initialState = {
    stateForm: {
        
            name: "",
            phone: "",
            profession: "",
            salary: "",
            email: "",                                    
            password: "",
            confirmpassword: "",
    },
    list: [],
    tempList: [],
    searchInput: "",
}

const empReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            // const { id, data } = action.payload;
            action.payload.data = {
                ...action.payload.data,
                id: new Date().getTime().toString(),
            }
            console.log("list", state.list);
            return {
                list: [...state.list, action.payload.data],
                tempList: [...state.tempList, action.payload.data],
                
            };
        
        case DELETE_EMP:
            const newList = state.list.filter((elem, i) => i !== action.index)
            const tempList = state.tempList.filter((elem, i) => i !== action.index)
            return {
                ...state,
                list: newList,
                tempList: tempList
            }
        
        case EDIT_EMP:
        console.log("editEmp", action.id);
            const selectedObj = state.tempList.find((elem) => elem.id === action.id);
            console.log('selectedObj', selectedObj);            
            return {
                ...state,
                selectEditId: action.id,
                stateForm : selectedObj
            }
        
        case UPDATE_EMP:
            const listIndex = state.list.findIndex((elem) => elem.id === action.id)
            const tempIndex = state.tempList.findIndex((elem) => elem.id === action.id);
            console.log("action.data", action.data )
            state.list[listIndex] = action.data
            state.tempInd[tempIndex] = action.data
            return {
                ...state,
                // list : state.list.map((elem, i) => i === action.id ? {...i, data : action.data, editing: false} : i )
            }
        
        case SEARCH_FILTER:
            console.log("action.data", action.data);
            return {
                ...state,
                searchInput: action.data,
                list: state.tempList.filter((elem) => elem.name.startsWith(state.searchInput) || elem.salary.toString().startsWith(state.searchInput))
                
            }
        
        default: 
            return {
                ...state
            }
    }
    
}

export default empReducer