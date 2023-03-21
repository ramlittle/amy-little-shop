import React, { useState,useEffect } from "react";
import Papa from "papaparse";
import Header from './Header.js';
const Products = () => {
  const [data, setData] = useState([]);
  const papaParse=()=>{
      Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRoT9A54AREkJ2CHgpSlFez8mm8H8_VSVzcWO61ZeAdH63VAbKYVB8yD1E2CbWwRhZZ10L5gTa6iR1X/pub?gid=148953084&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      }
    });
  }

   //render one time the data
   useEffect(()=>{
    papaParse();
  },[])

  console.log('dito ang data papaparse',data)
  const products = Array.from(data);
  const [searchResult,setSearchResult]=useState([]);
  const [items,setItems]=useState([]);
  
  function searchFunction(enteredProduct){
    const searchedProduct=
    products.filter((item)=>{
        return item.description.toLowerCase().includes(enteredProduct);
    })
    setSearchResult(searchedProduct);
    return searchedProduct;
  }       


  //Check if user entered in search
  useEffect(()=>{
    setItems(data);
    if (searchResult.length>0){
        setItems(searchResult);
    }else{
      setItems(data);
    }
  //will run on first render, also will run on state changes
  },[searchResult]);
  return (
    <>
      <Header searchFunction={searchFunction}/>
      <section className='products'>
        {items.slice(0).reverse().map((item)=>(
          <div className='card' key={item.description}>
              <img src={item.sample_img_url}/>
              <h2>{item.description.toUpperCase()}</h2>
              <a target = '_blank'
                  href={item.affiliate_link}>View</a>
              <div className='category'>
                  <label>Category: </label>
                  <span className={item.category}>
                      {item.category}
                  </span>
              </div>
          </div>
        ))}
      </section>
</>
  );
};
export default Products;
