//DEPENDENCIES
import {Routes,Route} from 'react-router';
//COMPONENTS
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Products from './components/Products.js';
import MovieData from './components/MovieData.js';
//CSS
import './css/Styles.css';
import './css/Media.css';
const App =()=>{
  return(
    <>
      <Routes>
        <Route path='/'element={<Products/>}/>
        <Route path='/movie'element={<MovieData/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;