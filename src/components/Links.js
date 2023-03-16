import {useSelector} from 'react-redux';

const Links =()=>{
    const links=useSelector(state=>state.links);
    console.log('dito links',links)
    return (
        <>
        </>
    )
}
export default Links;