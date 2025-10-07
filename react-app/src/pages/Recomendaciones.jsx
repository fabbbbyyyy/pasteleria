const Recomendaciones = () => {
  return (
    <main>
      <section id="centro">
        <h1>Recomendaciones</h1>
        <p className="subtitle">Descubre nuestras especialidades y productos más populares</p>
        
        <div className="recomendaciones-grid">
          <div className="producto-destacado">
            <h3>🏆 Más Vendido</h3>
            <div className="producto-card">
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop" alt="Torta de Manjar" />
              <h4>Torta de Manjar</h4>
              <p>Nuestra receta más solicitada por más de 30 años</p>
            </div>
          </div>

          <div className="producto-destacado">
            <h3>⭐ Favorito del Chef</h3>
            <div className="producto-card">
              <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop" alt="Torta Selva Negra" />
              <h4>Torta Selva Negra</h4>
              <p>La especialidad de la casa con chocolate premium</p>
            </div>
          </div>

          <div className="producto-destacado">
            <h3>🆕 Nuevo</h3>
            <div className="producto-card">
              <img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop" alt="Torta Red Velvet" />
              <h4>Torta Red Velvet</h4>
              <p>Suave, deliciosa y con un toque de elegancia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Recomendaciones;
