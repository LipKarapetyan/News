import React from "react";
import { useDispatch } from "react-redux";
import { handleCat } from "../store/CategoriaSlice";


 export const data = [
    {
        text: "general"
    },
    {
        text: "business"
    },
    {
        text: "entertainment"
    },
    {
        text: "health"
    },
    {
        text: "sports"
    },
    {
        text: "technology"
    }

]
function Category({text}) {
const dispatch = useDispatch()

function handleClick() {
 dispatch(handleCat({
    category:text
 }))
}
    
    return(
        <div>
            <button onClick={handleClick} className="category1">{text}</button> 
         </div>

         
    )
}

export default Category