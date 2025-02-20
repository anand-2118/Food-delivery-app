import './App.css'
import Navbar from './components/navbar/Navbar';
import Cart from './Pages/Cart/Cart';
import {Routes,Route} from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Home from './Pages/Home/Home';
import LoginPopup from './LoginPopup/LoginPopup';
import { useState } from 'react';

function App() {
     const [showLogin,setShowLogin] = useState(false)
  return (
    <>
     {showLogin?<LoginPopup setShowLogin={setShowLogin }/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/placeorder" element={<PlaceOrder/>}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
