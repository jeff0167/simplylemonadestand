import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import ProductPage from './pages/ProductPage'; 
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { GiCutLemon } from "react-icons/gi";

function App() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path; 
    navigate(path);
  }

  return (
    <div className="App">
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                  <GiCutLemon className='lemon h-8 w-auto'></GiCutLemon>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("products")}>Product Page</button>
                  <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("/cart")}>Cart</button>
                  <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" onClick={()=> navigate("/checkout")}>Checkout</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="App-header">
        <Routes>
          <Route path='/' element={<Navigate to="products" />} />
          <Route path="/products" element={<ProductPage></ProductPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}></Route>
          <Route path='*' element={<Navigate to="products" />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;