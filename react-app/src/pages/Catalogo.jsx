import { Link } from 'react-router-dom';

const Catalogo = () => {
  return (
    <main>
      <section id="centro">
        <h1>Catálogo de Productos</h1>
        <p className="category-description">Descubre nuestra amplia variedad de productos artesanales</p>
        
        <div id="catalogo">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=250&fit=crop" alt="Tortas Circulares" />
            <Link to="/tortascircular">Tortas Circulares</Link>
          </div>
          
          <div className="card">
            <img src="https://images.unsplash.com/photo-1557979619-445218f326b9?w=300&h=250&fit=crop" alt="Tortas Cuadradas" />
            <Link to="/tortascuadradas">Tortas Cuadradas</Link>
          </div>
          
          <div className="card">
            <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300&h=250&fit=crop" alt="Tortas Especiales" />
            <Link to="/tortasespeciales">Tortas Especiales</Link>
          </div>
          
          <div className="card">
            <img src="https://images.unsplash.com/photo-1587241321921-91a834d82efc?w=300&h=250&fit=crop" alt="Postres Individuales" />
            <Link to="/individual">Postres Individuales</Link>
          </div>
        </div>

        <div className="dietary-options">
          <h2>Opciones Especiales</h2>
          <div className="options-grid">
            <Link to="/vegano" className="option-card">
              <h3>🌱 Vegano</h3>
              <p>Productos 100% libres de ingredientes de origen animal</p>
            </Link>
            <Link to="/singluten" className="option-card">
              <h3>🌾 Sin Gluten</h3>
              <p>Opciones para personas con intolerancia al gluten</p>
            </Link>
            <Link to="/sinazucar" className="option-card">
              <h3>🍬 Sin Azúcar</h3>
              <p>Endulzados de forma natural sin azúcar añadida</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalogo;
