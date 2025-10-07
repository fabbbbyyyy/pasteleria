import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Historia from './pages/Historia';
import Comunidad from './pages/Comunidad';
import Recomendaciones from './pages/Recomendaciones';
import Register from './pages/Register';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Carrito from './pages/Carrito';
import Pedido from './pages/Pedido';
import Envio from './pages/Envio';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/envio" element={<Envio />} />
        {/* Placeholder routes for product categories */}
        <Route path="/tortascircular" element={<div>Tortas Circulares</div>} />
        <Route path="/tortascuadradas" element={<div>Tortas Cuadradas</div>} />
        <Route path="/tortasespeciales" element={<div>Tortas Especiales</div>} />
        <Route path="/individual" element={<div>Postres Individuales</div>} />
        <Route path="/vegano" element={<div>Productos Veganos</div>} />
        <Route path="/singluten" element={<div>Productos Sin Gluten</div>} />
        <Route path="/sinazucar" element={<div>Productos Sin Azúcar</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
