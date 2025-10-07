const Comunidad = () => {
  return (
    <main>
      <section id="centro">
        <h1>Comunidad 1000 Sabores</h1>
        <p className="subtitle">Conecta con otros amantes de la repostería</p>

        <div className="community-section">
          <h2>Testimonios de Clientes</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <p>&quot;Las tortas de 1000 Sabores han sido parte de todas nuestras celebraciones familiares por más de 20 años. ¡Simplemente deliciosas!&quot;</p>
              <div className="cliente-info">
                <strong>María González</strong>
                <span>Cliente fiel desde 2003</span>
              </div>
            </div>
            
            <div className="testimonio-card">
              <p>&quot;La atención es excepcional y los sabores son únicos. Recomiendo especialmente la torta de manjar.&quot;</p>
              <div className="cliente-info">
                <strong>Carlos Rodríguez</strong>
                <span>Cliente fiel desde 2010</span>
              </div>
            </div>
            
            <div className="testimonio-card">
              <p>&quot;Una tradición familiar que pasa de generación en generación. Calidad garantizada siempre.&quot;</p>
              <div className="cliente-info">
                <strong>Ana Morales</strong>
                <span>Cliente fiel desde 2018</span>
              </div>
            </div>
          </div>
        </div>

        <div className="community-section">
          <h2>Únete a Nuestra Comunidad</h2>
          <p>Comparte tus experiencias, recetas y momentos especiales con nosotros</p>
          <div className="social-links">
            <button className="social-btn">Facebook</button>
            <button className="social-btn">Instagram</button>
            <button className="social-btn">Twitter</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Comunidad;
