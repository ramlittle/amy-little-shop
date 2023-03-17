import {useState} from 'react';
const Search=(props)=>{
    const [enteredProduct,setEnteredProduct]=useState('');
    const [returnMessage,setReturnMessage]=useState('');

    const onSearchHandler=(e)=>{
        setEnteredProduct(e.target.value.toLowerCase());
        props.searchFunction(enteredProduct);
    }
    return(
        <>
            <input type = 'search' 
                value={enteredProduct}
                placeholder='search product here ex. piano'
                onChange={onSearchHandler}
            />
        </>
    )
}
export default Search;