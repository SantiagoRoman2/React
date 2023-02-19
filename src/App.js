import './App.css';

import Title from './components/Title/Title.js';
import Button from './components/Formulario/Button/Button';
import Formulario from './components/Formulario/Formulario';
import CartWidget from './components/CartWidget/CartWidget';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className='divNav'>
          <ItemListContainer />
          <Navbar />
          <CartWidget />
        </div>
        {/* <Formulario /> */}
      </header>
      <Title greeting="Saludo" className="Titulo"/>
    </div>
  );
}

export default App;
