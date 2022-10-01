import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Register from './component/sign.js';
import Cart from "./component/cart"
import { Route, Routes } from 'react-router-dom';
import Login from './component/login.js';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path="/" element={ <Navbar/>}></Route>
      <Route path="/cart" element={ <Cart/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>
    


    
    </div>
  );
}

export default App;
