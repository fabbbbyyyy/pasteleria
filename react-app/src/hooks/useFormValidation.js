import { useState } from 'react';

export const useFormValidation = () => {
  const [errors, setErrors] = useState(new Set());

  const validateNombre = (value) => {
    const errorMsg = "⚠️ Completa el campo nombre";
    setErrors(prev => {
      const newErrors = new Set(prev);
      if (value.trim().length === 0) {
        newErrors.add(errorMsg);
      } else {
        newErrors.delete(errorMsg);
      }
      return newErrors;
    });
    return value.trim().length > 0;
  };

  const validateEmail = (value) => {
    const errorMsg = "⚠️ Formato de correo incorrecto";
    setErrors(prev => {
      const newErrors = new Set(prev);
      if (!value.includes("@") || value.trim().length === 0) {
        newErrors.add(errorMsg);
      } else {
        newErrors.delete(errorMsg);
      }
      return newErrors;
    });
    return value.includes("@") && value.trim().length > 0;
  };

  const validatePassword = (pass1, pass2) => {
    const errorMsg = "⚠️ Las contraseñas deben ser idénticas";
    setErrors(prev => {
      const newErrors = new Set(prev);
      if (pass1 !== pass2 || pass2.trim().length === 0) {
        newErrors.add(errorMsg);
      } else {
        newErrors.delete(errorMsg);
      }
      return newErrors;
    });
    return pass1 === pass2 && pass2.trim().length > 0;
  };

  const clearErrors = () => {
    setErrors(new Set());
  };

  return {
    errors,
    validateNombre,
    validateEmail,
    validatePassword,
    clearErrors
  };
};
