import {useSelector} from 'react-redux';

const Products =()=>{
    const products=useSelector(state=>state.products);
    console.log('dito Products',Products)
    return (
        <section className='products'>
            {products.map((item)=>(
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
    )
}
export default Products;