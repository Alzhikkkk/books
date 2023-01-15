import { useEffect, useState } from "react";
import search from "../assets/search.svg";
import axios from "axios";
import BookDisplay from "./bookDisplay";


function Result(){
    
    const [query, setQuery] = useState("")
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);

    function onChangeQuery(e){
        setQuery(e.target.value);
    }

    async function fetchData(str1) {
        setIsLoading(true);
        try {
          const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${str1}`)
          console.log(response.data.items)
          setData(response.data.items);
        } catch (error) {
          setData(null)
        }
        finally {
            setIsLoading(false);
        }
      }

     
    return(
        <section className="result">
            <div className="header-search">
                  <span>
                     <input type="text" name="query" placeholder="Search you fav book..." onChange={onChangeQuery}/>
                     <button onClick={()=>fetchData(query)}><img src={search} alt="Search"/></button>
                  </span>
            </div>
            {
            isLoading && 
                <div class="loader">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            }
            {data && data.length>0 ? 
            <div className="result-item">
                <h1>Search result:</h1>
                <BookDisplay data={data}></BookDisplay>
            </div>:
            <div>Search your favorite book!</div> 
            }  
        </section>
    )
}

export default Result;