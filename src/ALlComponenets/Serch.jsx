import React, { useEffect, useState } from "react";
import { selectNews } from "../store/SerchSlice";
import Newss from "./Newss";
import { useSelector } from "react-redux";

function Serch() {
    const [searchRes, setSearchRes] = useState([])
    const API_KEY = "f6fa7031dced4a9b83299c8a37bad75f"
    const NEWS_API = "https://newsapi.org/v2/everything?"
    const [searchCount, setSearchCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const search = useSelector(selectNews)
    
    useEffect(() => {
      fetch(NEWS_API + `q=${search}&pageSize=9&page=${currentPage}&apiKey=${API_KEY}`)
        .then((resp) => resp.json())
        .then((resp) => {
          setSearchRes(resp.articles);
          setSearchCount(resp.totalResults);
        });
    }, [search, currentPage]);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
    return(
        <div className="diver">
           {
            searchRes.map((el)=>{
                return (
                  <div className="mmm">
                    <Newss info={el} />

                    </div>
                    
                )
            })
           }

<div className="pagdiv">
 
        {currentPage > 1 && (
          <button className="active" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        
       
        {currentPage * 20 < searchCount && (
          <button className="next  " onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
       
      </div>
        </div>
    )
}

export default Serch


