import {useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import Header from './Header.js';
const MovieData =()=>{
    const products=useSelector(state=>state.products);
    const [searchResult,setSearchResult]=useState([]);
    const [items,setItems]=useState(products);
    console.log('dito Products',products)

    function searchFunction(enteredProduct){
        const searchedProduct=
        products.filter((item)=>{
            return item.description.toLowerCase().includes(enteredProduct);
        })
        console.log('dito ang search results',searchedProduct)
        setSearchResult(searchedProduct);
        return searchedProduct;
    }       
    console.log('ito namna ang searched results from products',searchResult);

    //Check if user entered in search
    useEffect(()=>{
        if (searchResult.length>0){
            setItems(searchResult);
        }
    //will run on first render, also will run on state changes
    },[searchResult]);
    return (
        <>
        <Header searchFunction={searchFunction}/>
        <section className='products'>
            {items.map((item)=>(
                <div className='card'>
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
    )
}
export default MovieData;