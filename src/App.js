//DEPENDENCIES
import {Routes,Route} from 'react-router';
//COMPONENTS
import Heder from './components/Header.js';
import Footer from './components/Footer.js';
import Links from './components/Links.js';
//CSS
import './css/General.css';
const App =()=>{
  return(
    <>
      <Routes>
        <Route path='/'element={<Links/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;