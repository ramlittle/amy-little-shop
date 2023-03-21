import {useState,useEffect} from 'react';
const Search=(props)=>{
    const [enteredProduct,setEnteredProduct]=useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [returnMessage,setReturnMessage]=useState('');

    const onSearchHandler=(e)=>{
        setEnteredProduct(e.target.value.toLowerCase());
        setSearchResult(props.searchFunction(enteredProduct));
    }

    useEffect(()=>{
        if (searchResult.length<1){
            setReturnMessage('no result found');
        }else{
            setReturnMessage('');
        }
    // //will run on first render, also will run on state changes
    },[searchResult]);
    return(
        <>
            <input type = 'search' 
                value={enteredProduct}
                placeholder='search product here ex. piano'
                onChange={onSearchHandler}
            />
            <small>{returnMessage}</small>
        </>
    )
}
export default Search;