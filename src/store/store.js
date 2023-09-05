 import { configureStore } from '@reduxjs/toolkit'
 import newsSlice from './NewSlices'
 import CategorySlice from './CategoriaSlice'
 import CauntrySlice from './CountrySlice'
 import basketSlice from './BasketSlice'
 import SearchSlice from './SerchSlice'
 

 

 const store = configureStore({
  

    reducer: {
        newsSlice,
        CategorySlice,
        CauntrySlice,
        basketSlice,
        SearchSlice,
      
    },
  })

  export default store