import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
    // Here you would typically authenticate with backend
    alert('Inicio de sesión exitoso!');
    navigate('/');
  };

  return (
    <main id="registro">
      <h1>Iniciar Sesión</h1>
      <form className="form-registro" onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          required 
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          required 
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn-registro">Iniciar Sesión</button>
      </form>
      <p>¿No tienes cuenta? <Link to="/registro">Regístrate</Link></p>
    </main>
  );
};

export default Login;
