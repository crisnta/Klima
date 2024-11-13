# Klima App

## Descripción

Clima es una aplicación web desarrollada en **ReactJS** utilizando **ViteJS** y **TanStack** para la gestión de estados. La aplicación permite a los usuarios obtener el clima actual de su ubicación local a través del navegador, buscar información climática de localidades específicas y agregar ciudades a una lista de favoritos.

## URL de Producción

La aplicación está disponible en producción en la siguiente URL: [https://klima-beige.vercel.app](https://klima-beige.vercel.app). Puedes acceder a esta dirección para probar todas las funcionalidades de la aplicación en tiempo real.

## Tecnologías Utilizadas

- **ReactJS**: Biblioteca de JavaScript para construir interfaces de usuario.
- **ViteJS**: Herramienta de construcción rápida para aplicaciones modernas.
- **TanStack Query**: Librería para la gestión del estado y la sincronización de datos con APIs.

## Funcionalidades

1. **Ubicación Local**:

   - La aplicación solicita al usuario permiso para acceder a su ubicación actual mediante la API de geolocalización del navegador.
   - Muestra el clima actual basado en la ubicación obtenida.

2. **Búsqueda de Localidades**:

   - Permite a los usuarios buscar información climática de cualquier ciudad ingresando su nombre.
   - Realiza peticiones a la API de OpenWeather para obtener datos meteorológicos.

3. **Favoritos**:
   - Los usuarios pueden agregar ciudades a una lista de favoritos para un acceso rápido en el futuro.
   - La lista se almacena en el estado local utilizando TanStack Query, lo que facilita la gestión y persistencia de datos.

## Instalación

Para instalar y ejecutar la aplicación, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/clima-app.git
   cd clima-app
   ```
2. Clona este repositorio:
   ```bash
   npm install
   ```
3. Clona este repositorio:
   ```bash
   npm run dev
   ```
4. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en acción.

## Estructura del Proyecto

La estructura del proyecto Clima App es la siguiente:

```plaintext
clima-app/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── vite.config.js
```

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar esta aplicación, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
