import {useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import Header from './Header.js';
const Products =()=>{
    const products=useSelector(state=>state.products);
    const [searchResult,setSearchResult]=useState([]);
    const [items,setItems]=useState(products);

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
        if (searchResult.length>0){
            setItems(searchResult);
        }
    //will run on first render, also will run on state changes
    },[searchResult]);
    return (
        <>
        <Header searchFunction={searchFunction}/>
        <section className='products'>
            {items.slice(0).reverse().map((item)=>(
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
export default Products;