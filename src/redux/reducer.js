import DataSet from '../data/products.json';

const initialState={
    products:DataSet
};

const reducer =(state=initialState, action)=>{
   switch(action.type){
    case 'POPULATE_PRODUCTS':
        return {...state,products:action.payload.products}
    default:
        return state;
   }
}

export default reducer;
