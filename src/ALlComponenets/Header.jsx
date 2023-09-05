
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { handleClick } from "../store/NewSlices"
import { useDispatch } from "react-redux"
import { HanClik } from "../store/SerchSlice"
function Header() {
    const [inputValue,SetinputValue] = useState("")
    const dispatch = useDispatch()
   function handleClick() {
        dispatch(HanClik({product:inputValue}))
   } 
    
    return (
        <div className="hed">
            <div >
               <Link to={""} className="new">
                     <h2 className="newHed" >News.USA</h2>
               </Link>

            </div>

            <div>
                <input type="text" value={inputValue} onChange={(e)=> SetinputValue(e.target.value)}  placeholder="...Search"/>

                <Link to={"/serch"}>
                <button className="category1" onClick={handleClick}>Serch</button>
                </Link>
            </div>

            <div>
                <Link to={"/basket"} className="new">
                <img src="/save1.webp" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Header