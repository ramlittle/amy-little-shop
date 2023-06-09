import Search from './Search.js';
const Header =(props)=>{
    const siteLogo='https://i.ibb.co/xJtZ4DH/Yellow-and-Black-Online-Shop-Business-Logo-removebg-preview.png'
    return(
        <header>
            <div className='img-container'>
                <a href=''>
                    <img src={siteLogo}/>
                </a>
            </div>
            <div className='title'>
                <h1>Amy Little Shop</h1>
            </div>
            <div className='search'>
                <Search searchFunction={props.searchFunction}/>
            </div>
            <div className='others'>
                    <h6>Follow us on </h6>
                    <a target='_blank'
                        href='https://www.facebook.com/ramdom.access.memory'>
                        <img src='https://cdn-icons-png.flaticon.com/512/124/124010.png'/>
                    </a>
                    <a target='_blank'
                    href='https://www.youtube.com/channel/UCHAtmGDTDFT6fDlrF0Hd8yA'>
                        <img src='https://www.state.gov/wp-content/uploads/2020/07/72-729738_youtube-red-circle-circle-youtube-logo-png-clipart.jpg'/>
                    </a>
            </div>
        </header>
    )
}
export default Header;