//DEPENDENCIES
import {Routes,Route} from 'react-router';
//COMPONENTS
import Footer from './components/Footer.js';
import Products from './components/Products.js';
//CSS
import './css/Styles.css';
import './css/Media.css';
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