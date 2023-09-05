import { createSlice } from "@reduxjs/toolkit";


const newsSlice = createSlice({
    name : "news",
    initialState : {
        value: []
    },
    reducers:{
            handleClick(state, {payload}){
            state.value = payload.news
        }

    }
})

export const {handleClick} = newsSlice.actions
export const selectPro = (store)=> store.newsSlice.value

export default newsSlice.reducer