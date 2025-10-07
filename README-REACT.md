# Pastelería 1000 Sabores - React Application

## Migración a React

Este proyecto ha sido migrado de HTML estático a una aplicación React moderna.

### Estructura del Proyecto

```
react-app/
├── public/              # Archivos estáticos (imágenes, etc.)
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── pages/          # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Historia.jsx
│   │   ├── Comunidad.jsx
│   │   ├── Recomendaciones.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Perfil.jsx
│   │   ├── Carrito.jsx
│   │   ├── Pedido.jsx
│   │   └── Envio.jsx
│   ├── hooks/          # Custom hooks
│   │   └── useFormValidation.js
│   ├── App.jsx         # Componente principal con routing
│   ├── main.jsx        # Punto de entrada
│   └── style.css       # Estilos (migrados del proyecto original)
├── package.json
└── vite.config.js
```

### Tecnologías Utilizadas

- **React 18**: Librería para construir interfaces de usuario
- **React Router DOM**: Navegación entre páginas
- **Vite**: Build tool moderno y rápido
- **CSS**: Estilos migrados del proyecto original

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   cd react-app
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

3. **Construir para producción:**
   ```bash
   npm run build
   ```
   Los archivos de producción se generarán en la carpeta `dist/`

4. **Vista previa de la build de producción:**
   ```bash
   npm run preview
   ```

### Características Migradas

✅ **Navegación completa** - Todas las páginas HTML ahora son componentes React con navegación mediante React Router

✅ **Componentes reutilizables** - Header, Footer y Navigation se usan en todas las páginas

✅ **Validación de formularios** - El formulario de registro incluye validación en tiempo real con React hooks

✅ **Estilos preservados** - Todo el CSS original se mantiene funcionando

✅ **Estructura modular** - Código organizado en componentes, páginas y hooks

✅ **Rutas dinámicas** - Sistema de routing para navegación sin recargar la página

### Mejoras Implementadas

1. **SPA (Single Page Application)**: Navegación instantánea sin recargas de página
2. **Componentes reutilizables**: Código más mantenible y escalable
3. **Custom Hooks**: Lógica de validación encapsulada y reutilizable
4. **Hot Module Replacement**: Desarrollo más rápido con recarga instantánea
5. **Build optimizado**: Vite genera bundles optimizados para producción

### Próximos Pasos Recomendados

- [ ] Implementar gestión de estado global (Context API o Redux)
- [ ] Conectar con un backend/API REST
- [ ] Agregar autenticación real con tokens JWT
- [ ] Implementar carrito de compras funcional
- [ ] Agregar tests unitarios con Jest y React Testing Library
- [ ] Optimizar imágenes y lazy loading
- [ ] Implementar SEO con React Helmet
- [ ] Agregar Progressive Web App (PWA) features

### Archivos Originales

Los archivos HTML, CSS y JavaScript originales se mantienen en la raíz del proyecto para referencia.

### Soporte

Para cualquier duda o problema, consulte la documentación oficial:
- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)
