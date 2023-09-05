import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name:"serch",

    initialState:{
        products:"",
    },
    reducers:{
      
      HanClik(state,{payload}){
        state.products = payload.product
      }
       
    }
})


export const selectNews = (store)=> store.SearchSlice.products
export const {HanClik}=SearchSlice.actions

export default SearchSlice.reducer
