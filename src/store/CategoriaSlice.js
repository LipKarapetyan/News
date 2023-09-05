import { createSlice } from "@reduxjs/toolkit";


const CategorySlice = createSlice({
    name : "Country",
    initialState : {
        value:"general"
    },
    reducers:{
            handleCat(state, {payload}){
            state.value = payload.category
        }

    }
})

export const {handleCat} = CategorySlice.actions
export const selectCategory = (store)=> store.CategorySlice.value

export default CategorySlice.reducer