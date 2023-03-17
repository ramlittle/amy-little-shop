//DEPENDENCIES
import {Routes,Route} from 'react-router';
//COMPONENTS
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Products from './components/Products.js';
//CSS
import './css/Styles.css';
const App =()=>{
  return(
    <>
      <Routes>
        <Route path='/'element={<Products/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;