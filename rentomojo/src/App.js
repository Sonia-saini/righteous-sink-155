import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Product from './component/product';
import Cart from "./component/cart"
function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Product/>
     ---------------------------------------------------------------
     <Cart/>
    </div>
  );
}

export default App;
