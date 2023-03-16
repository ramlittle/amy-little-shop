import DataSet from '../data/links.json';

const initialState={
    links:DataSet
};

const reducer =(state=initialState, action)=>{
   switch(action.type){
    case 'POPULATE_LINKS':
        return {...state,links:action.payload.links}
    default:
        return state;
   }
}

export default reducer;
