import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormValidation } from '../hooks/useFormValidation';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  const { errors, validateNombre, validateEmail, validatePassword } = useFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validate on change
    if (name === 'nombre') {
      validateNombre(value);
    } else if (name === 'email') {
      validateEmail(value);
    } else if (name === 'confirmar') {
      validatePassword(formData.password, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nombreValid = validateNombre(formData.nombre);
    const emailValid = validateEmail(formData.email);
    const passwordValid = validatePassword(formData.password, formData.confirmar);

    if (nombreValid && emailValid && passwordValid) {
      console.log('Form submitted:', formData);
      // Here you would typically send data to backend
      alert('Registro exitoso!');
    }
  };

  return (
    <>
      <main id="registro">
        <h1>Crear una cuenta</h1>
        <form className="form-registro" onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Nombre completo" 
            required 
            value={formData.nombre}
            onChange={handleChange}
            className={errors.has("⚠️ Completa el campo nombre") ? 'error' : ''}
          />
          <input 
            type="email" 
            id="mail" 
            name="email" 
            placeholder="Correo electrónico" 
            required 
            value={formData.email}
            onChange={handleChange}
            className={errors.has("⚠️ Formato de correo incorrecto") ? 'error' : ''}
          />
          <input 
            type="password" 
            id="pass1" 
            name="password" 
            placeholder="Contraseña" 
            required 
            value={formData.password}
            onChange={handleChange}
          />
          <input 
            type="password" 
            id="pass2" 
            name="confirmar" 
            placeholder="Confirmar contraseña" 
            required 
            value={formData.confirmar}
            onChange={handleChange}
            className={errors.has("⚠️ Las contraseñas deben ser idénticas") ? 'error' : ''}
          />
          <button type="submit" className="btn-registro">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
      </main>
      <div id="errores">
        {[...errors].map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    </>
  );
};

export default Register;
