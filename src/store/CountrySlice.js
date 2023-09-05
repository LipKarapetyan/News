import { createSlice } from "@reduxjs/toolkit";


const CauntrySlice = createSlice({
    name : "Country",
    initialState : {
        value:"us"
    },
    reducers:{
            handleCauntry(state, {payload}){
            state.value = payload.country
        }

    }
})

export const {handleCauntry} = CauntrySlice.actions
export const selectCountry = (store)=> store.CauntrySlice.value

export default CauntrySlice.reducer