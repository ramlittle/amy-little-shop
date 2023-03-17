import RetroHitCounter from 'react-retro-hit-counter';
const Footer=()=>{
    const copyrightYear=(/\d{4}/.exec(Date())[0])
    
    //page counter reference
    //https://www.npmjs.com/package/react-retro-hit-counter
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
            <RetroHitCounter
            hits={0}
           withBorder={true}
           withGlow={false}
           minLength={4}
           size={40}
           padding={4}
           digitSpacing={3}
           segmentThickness={4}
           segmentSpacing={0.5}
           segmentActiveColor="#76FF03"
           segmentInactiveColor="#315324"
           backgroundColor="#222222"
           borderThickness={7}
           glowStrength={0.5}
            />
        </footer>
    )
}
export default Footer;