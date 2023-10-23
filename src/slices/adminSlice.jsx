import {createSlice} from '@reduxjs/toolkit'

/*Defining the initial state for the admin slice*/
const initialState = {
    infos: {}, /*Empty object to hold admin's info*/
    isLogged: false /*Flag to indicate if the admin is logged in or not*/
}

/*Creating a Redux slice named "admin"*/
export const adminSlice = createSlice({
    name: "admin", /*Slice name*/
    initialState, /*Initial state for the slice*/
    reducers: {   /*Reducer functions to modify the state*/
        initializeAdmin: (state, action) => {
            state.infos = action.payload /*Updating the admin's info with the provided payload  */ 
            state.isLogged = true         /*Setting the logged in flag to true*/
        },
        /*Connects the admin by setting the state with the provided data*/
        connectAdmin: (state, action) => {
            state.infos = action.payload /*Updating the admin's info with the provided payload*/
            state.isLogged = true /*Setting the logged in flag to true*/
        },
        /*Logs out the admin by resetting the state to its initial values*/
        logoutAdmin: (state) => {
            state.infos = {} /*Clearing the admin's info*/
            state.isLogged = false /*Setting the logged in flag to false*/
        }
    }
})

/*Exporting the actions to be used by components*/
export const {connectAdmin, logoutAdmin, initializeAdmin} = adminSlice.actions
/*A selector to get the admin slice from the Redux store*/
export const selectAdmin = (state) => state.admin
/*Exporting the reducer function to be used by the Redux store*/
export default adminSlice.reducer