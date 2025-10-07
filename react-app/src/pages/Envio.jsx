const Envio = () => {
  return (
    <main id="envio">
      <h1>Gestión de Envío</h1>

      <div className="tracking">
        <h2>Estado del envío</h2>
        <div className="progress-bar">
          <div className="progress" style={{ width: '65%' }}>En camino (65%)</div>
        </div>
        <p>📍 Última ubicación: Centro de distribución Santiago</p>
        <p>🚚 Próxima parada: Dirección del cliente</p>
      </div>

      <div className="delivery-preference">
        <h2>Selecciona tu fecha de entrega preferida</h2>
        <input type="date" id="fecha-entrega" />
        <button className="guardar-fecha">Guardar Preferencia</button>
      </div>
    </main>
  );
};

export default Envio;
