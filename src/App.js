import './App.css';
import Deals from './components/Deals/Deals';
import  FeaturedProducts  from './components/FeaturedProducts/FeaturedProducts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopularProducts from './components/PopularProducts/PopularProducts';
import ShopioProduct from './components/ShopioProduct/ShopioProduct';
import SlideShow from './components/SlideShow/SlideShow';


function App() {
  return (
    <>
    <div className='app'>
    
    <Header/>
    <SlideShow/>
         <PopularProducts/>
         <FeaturedProducts/>
         <Deals/>
         <ShopioProduct/>
         <Footer/>

         
    </div>
    </>
  );
}

export default App;
