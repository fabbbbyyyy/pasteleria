const Historia = () => {
  return (
    <main>
      <section id="centro">
        <div className="historia-hero">
          <h1>Nuestra Historia</h1>
          <p className="subtitle">50 años endulzando vidas</p>
        </div>

        <div className="history-section">
          <h2>El Comienzo</h2>
          <p>Desde 1974, Pastelería 1000 Sabores ha sido sinónimo de tradición y calidad en Chile. Todo comenzó con Don Eduardo Morales y Doña Carmen Silva, quienes con su pasión por la repostería decidieron abrir las puertas de nuestra primera tienda en el corazón de Santiago.</p>
        </div>

        <div className="achievements">
          <h2>Logros y Reconocimientos</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">50</div>
              <h4>Años de Tradición</h4>
              <p>Medio siglo endulzando momentos especiales</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">15</div>
              <h4>Premios Nacionales</h4>
              <p>Reconocimientos a la excelencia en repostería</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">8</div>
              <h4>Sucursales</h4>
              <p>Presencia en la Región Metropolitana</p>
            </div>
            <div className="achievement-card">
              <div className="achievement-number">50+</div>
              <h4>Variedades de Sabores</h4>
              <p>Desde clásicos hasta innovaciones únicas</p>
            </div>
          </div>
        </div>

        <div className="history-section">
          <h2>Nuestros Fundadores</h2>
          <div className="founders-section">
            <div className="founder-card">
              <div className="founder-photo">
                <img src="/pichono.png" alt="Don Eduardo Morales" />
              </div>
              <div className="founder-info">
                <h3>Don Eduardo Morales</h3>
                <p className="founder-title">Cofundador y Maestro Pastelero</p>
                <p className="founder-bio">&quot;La creatividad y el amor son los ingredientes secretos que nunca aparecen en las recetas. Son esos los que hacen que nuestros sabores sean únicos e inolvidables.&quot;</p>
                <p className="founder-years">1950 - Presente | 50 años de dedicación</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Historia;
