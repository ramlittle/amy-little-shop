const initialState={
    emergencies:[]
};

const reducer =(state=initialState, action)=>{
   switch(action.type){
    case 'POPULATE_EMERGENCIES':
        return {...state,emergencies:action.payload.emergencies}
    default:
        return state;
   }
}

export default reducer;
