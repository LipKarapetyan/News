import React from "react";
import { useSelector } from "react-redux";
import Newss from "./ALlComponenets/Newss";
import { selectNews } from "./store/BasketSlice";
import SaveNewss from "./ALlComponenets/SaveNews";

function Basket() {

    const savedNews = useSelector(selectNews)

console.log(savedNews);
    return (
        <div className="diver" >
       
        {
            savedNews.map((el)=>{
                return(
                    <div key={Math.random()} className="mmm">
                    <SaveNewss  info={el}/>
                    </div>
                )
            })
        }
    </div>
    );
}

export default Basket

