import './App.css';
import Header from './components/Header/Header';
import Deals from './components/Products/Deals/Deals';
import SlideShow from './components/Products/SlideShow/SlideShow';
import Featured from './components/Products/Featured product/Featured';
import PopularProducts from './components/Products/popular products/PopularProducts';
import Slide from './components/Products/Slider/Slider';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className='app'>

     <Header/> 
     <SlideShow/>
     <PopularProducts/>
     <Featured/>
     <Deals/>
     <Slide/>
     <Footer/>
    </div>
    </>
  );
}

export default App;
