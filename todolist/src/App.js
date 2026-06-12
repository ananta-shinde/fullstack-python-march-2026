import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskList from './pages/TaskList';
import AddNewTask from './pages/AddNewTask';
import Counter from './pages/Counter';
import CartPage from './pages/CartPage';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ParentComponent from './pages/ParentComponent';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/task/add" element={<AddNewTask/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/demo' element={<ParentComponent/>}/>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
