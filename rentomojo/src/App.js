import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';

import Cart from "./component/cart"
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path="/" element={ <Navbar/>}></Route>
      <Route path="/cart" element={ <Cart/>}></Route>
     </Routes>
    


    
    </div>
  );
}

export default App;
