const Footer=()=>{
    const copyrightYear=(/\d{4}/.exec(Date())[0])
    return (
        <footer>
            <a target='_blank'
                    href='https://www.facebook.com/ramdom.access.memory'>
                    Amy Little Shop
            </a> 
            <a className='visitCounter'href="https://www.freecounterstat.com" 
                title="website counter">
                    <img src="https://counter4.optistats.ovh/private/freecounterstat.php?c=ynejhr2unyma8x9dp46d4xm3ndes1sy8" 
                        border="0" title="website counter" alt="website counter"/></a>
            <p>
                Follow us on 
                <a target='_blank'
                    href='https://www.facebook.com/ramdom.access.memory'>
                    <img src='https://cdn-icons-png.flaticon.com/512/124/124010.png'/>
                </a>
                <a target='_blank'
                    href='https://www.youtube.com/channel/UCHAtmGDTDFT6fDlrF0Hd8yA'>
                        <img src='https://p7.hiclipart.com/preview/208/269/277/youtube-play-button-computer-icons-clip-art-youtube.jpg'/>
                    </a>
            </p>
            <p>Copyright &copy; All Rights Reserved {copyrightYear}</p>
        </footer>
    )
}
export default Footer;