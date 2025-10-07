const Perfil = () => {
  return (
    <main>
      <section id="centro">
        <h1>Mi Perfil</h1>
        
        <div className="perfil-section">
          <h2>Información Personal</h2>
          <div className="perfil-info">
            <p><strong>Nombre:</strong> Usuario Demo</p>
            <p><strong>Email:</strong> usuario@example.com</p>
            <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
          </div>
        </div>

        <div className="perfil-section">
          <h2>Mis Pedidos</h2>
          <p>No tienes pedidos recientes</p>
        </div>

        <div className="perfil-section">
          <h2>Direcciones de Entrega</h2>
          <p>No hay direcciones guardadas</p>
        </div>
      </section>
    </main>
  );
};

export default Perfil;
