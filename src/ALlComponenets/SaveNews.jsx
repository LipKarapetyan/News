import React, { useState } from "react";
import Share from "./Share";
import Save from "./Save";
import { useDispatch, useSelector } from "react-redux";
import { HanClik, selectNews } from "../store/BasketSlice";


function SaveNewss({ info }) {

  
  
  const [clicked, setClicked] = useState(true);

  const dispatch = useDispatch();
  const saves = useSelector(selectNews)

  const handleClick = () => {
    setClicked(prev => !prev);
  
    const updatedSaves = clicked
    ? saves.filter(save => save.url !== info.url)
    : "";
    

  dispatch(HanClik({ product : updatedSaves}))
  };

  

 



  return (
    <div>
      <h4 className="title1">{info.title}</h4>
      <img src={info.urlToImage} className="imgsize" />
      <p className="title1">{info.description}</p>

      <div className="saveshare">
        <Share />
        <button className={` ${clicked ? "clicked" : ""}`} onClick={() => handleClick() } >
          <Save info={info} />
        </button>
      </div>
    </div>
  );
}

export default SaveNewss