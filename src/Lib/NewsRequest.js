import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../store/NewSlices";
import { useEffect } from "react";
import { selectCategory } from "../store/CategoriaSlice";
import { selectCountry } from "../store/CountrySlice";
import { useState } from "react";



export function Newsreq() {
  const [loading, setLoading] = useState(true);

 const category =  useSelector(selectCategory)
 const caountry = useSelector(selectCountry)
 console.log(category);
  const apiKey = "f6fa7031dced4a9b83299c8a37bad75f";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${caountry}&category=${category}&apiKey=${apiKey}`;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        dispatch(handleClick({ news: data.articles }));
      })
      
  }, [category,caountry]);

 
}

export default Newsreq;
