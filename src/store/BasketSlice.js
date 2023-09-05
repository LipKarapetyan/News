import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name:"basket",

    initialState:{
        products:JSON.parse(localStorage.getItem("savedNews")) || [],
       
    },
    reducers:{
      
      HanClik(state,{payload}){
        state.products = payload.product  
        localStorage.setItem("savedNews", JSON.stringify(state.products)) 
    }
  }
})


export const selectNews = (store)=> store.basketSlice.products
export const {HanClik}=basketSlice.actions

export default basketSlice.reducer
