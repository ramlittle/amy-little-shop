import React, { useState } from "react";
import Papa from "papaparse";

const MovieData = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRoT9A54AREkJ2CHgpSlFez8mm8H8_VSVzcWO61ZeAdH63VAbKYVB8yD1E2CbWwRhZZ10L5gTa6iR1X/pub?gid=148953084&single=true&output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const movies = Array.from(data);
  const [searchResult,setSearchResult]=useState([]);
  
  return (
    <section className='products'>
    {movies.map((data)=>(
        <div className='card' key={data.description}>
            <img src={data.sample_img_url}/>
            <h2>{data.description.toUpperCase()}</h2>
            <a target = '_blank'
                href={data.affiliate_link}>View</a>
            <div className='category'>
                <label>Category: </label>
                <span className={data.category}>
                    {data.category}
                </span>
            </div>
        </div>
    ))}
</section>

  );
};
export default MovieData;
