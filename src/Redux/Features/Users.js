import {createSlice} from '@reduxjs/toolkit';


export const UserSlice = createSlice({
    name:'users',
    initialState:{
        friends : []
    },
    reducers:{
        GetUsers:(state,action) => {
            return{
                ...state,
                friends:[...state.friends,...action.payload]
            }
        },
        AddUser:(state, action) => {
            return {
                ...state,
                friends:[...state.friends,action.payload]
            }
        },
        RemoveUser:(state,action) => {
            return{
                ...state,
                friends:state.friends.filter(item => item !== action.payload)
            }
        },
    },
})

export const {GetUsers, AddUser, RemoveUser} = UserSlice.actions



export default UserSlice.reducer