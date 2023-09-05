import React, { useState } from "react";
import NewSlices, { selectPro } from "../store/NewSlices";
import { useDispatch, useSelector } from "react-redux";
import Newsreq from "../Lib/NewsRequest";
import Newss from "./Newss";
import Category from "./Category";
import { handleCauntry } from "../store/CountrySlice";

import Basket from "../Basket";


function NewsFunc() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const news1 = useSelector(selectPro);

    const totalPages = Math.ceil(news1.length / itemsPerPage);
    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedNews = news1.slice(startIndex, endIndex);

    const [selectedNews, setSelectedNews] = useState(null);
    const [selectedNewsUrl, setSelectedNewsUrl] = useState(null);

    const openPopup = (info) => {
        setSelectedNews(info);
        setSelectedNewsUrl(info.url);
    };

    const closePopup = () => {
        setSelectedNews(null);
        setSelectedNewsUrl(null);
    };

    const [inputValue, SetinputValue] = useState("us")
    const news = useSelector(selectPro)

    console.log(news);

    const data = [
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
    console.log(inputValue);
    const dispatch = useDispatch()
    function toglClick() {
        dispatch(handleCauntry({
            country: inputValue
        }))
    }



    return (

        <div>
            <div  >


                <div className="categori" >




                    {
                        data.map((el) => {
                            return (
                                <div className="cat" key={Math.random()}>
                                    <Category text={el.text} />
                                </div>
                            )
                        })
                    }
                    <select onClick={toglClick} value={inputValue} onChange={(e) => SetinputValue(e.target.value)}>
                        <option value="us" >Country</option>
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="it">Italaia</option>
                        <option value="at">Austria</option>
                        <option value="be">Belgium</option>
                        <option value="br">Brazilia</option>
                    </select>
                </div>
                <Newsreq />


                <div onClick={selectedNews !== null ? closePopup : ""} className="newsdiv" >

                    {displayedNews.map((el) => (
                        <div className="mmm" key={Math.random()} >
                            <Newss info={el} />
                            <button className="category1" onClick={() => openPopup(el)}>
                                Open News
                            </button>
                        </div>
                    ))}

                    {selectedNews && (
                        <div className="popup">
                            <div className="popup-content">
                                <button className="close-button" onClick={closePopup}>Close</button>
                                <Newss info={selectedNews} />

                                {selectedNewsUrl && (
                                    <a href={selectedNewsUrl} target="_blank" rel="noopener noreferrer">
                                        <button className="category1" >Read More</button>
                                    </a>
                                )}


                            </div>
                        </div>
                    )}

                    <Basket />
                </div>
                <div className="pagination">

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToPage(index + 1)}
                            className={currentPage === index + 1 ? "active" : "next"}
                        >
                            {index + 1}
                        </button>
                    ))}

                </div>

            </div>

        </div>


    )
}

export default NewsFunc