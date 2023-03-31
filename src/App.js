import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestConsulta from './components/firebase/TestConsulta';
import TestConsCol from './components/firebase/TestConsCol';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/test' element={<TestConsulta/>}/>
          <Route path='/testcol' element={<TestConsCol/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;