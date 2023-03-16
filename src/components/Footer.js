const Footer=()=>{
    let copyrightYear=(/\d{4}/.exec(Date())[0])
    return (
        <footer>
            <a target='_blank'
                    href='https://www.facebook.com/ramdom.access.memory'>
                    Amy Little Shop
            </a> 
            <p>
                Follow us on 
                <a target='_blank'
                    href='https://www.facebook.com/ramdom.access.memory'>
                    <img src='https://cdn-icons-png.flaticon.com/512/124/124010.png'/>
                </a>
            </p>
            <p>Copyright &copy; All Rights Reserved {copyrightYear}</p>
        </footer>
    )
}
export default Footer;