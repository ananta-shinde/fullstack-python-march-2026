import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import ProfilePage from './pages/ProfilePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import DemoComponent from './DemoComponent';
function App() {
  return (
      <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/products' element={<ProductListingPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/orders' element={<OrderPage/>}/>
              <Route path='/profile' element={<ProfilePage/>}/>
              <Route path='/signin' element={<SignInPage/>}/>
              <Route path='/signup' element={<SignUpPage/>}/>
              <Route path='/demos' element={<DemoComponent />}/>
          </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
