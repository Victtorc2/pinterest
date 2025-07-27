#  Pinterest Clone - React + Vite

Este proyecto es una clonación del formulario y funcionalidad básica de Pinterest, construido con React, Vite y otras tecnologías modernas. Incluye un formulario para crear nuevos pines (imágenes), navegación con React Router y un diseño inspirado en la experiencia de usuario de Pinterest.

---

##  Instrucciones de Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

git clone https://github.com/Victtorc2/pinterest
cd pinterest

2. Instalar dependencias
Este proyecto usa npm para la gestión de dependencias.
npm install

3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

VITE_UNSPLASH_ACCESS_KEY=TU_CLAVE_DE_UNSPLASH
Puedes obtener tu clave gratuita en Unsplash Developers.

4. Iniciar la aplicación

npm run dev
Esto abrirá la app en http://localhost:5173 (o el puerto que Vite asigne).

Tecnologías Utilizadas
React – Librería para construir interfaces de usuario.

Vite – Bundler moderno y rápido.

React Router DOM – Navegación entre páginas.

Bootstrap 5 – Para estilos responsivos rápidos.

Unsplash API – Para cargar imágenes automáticamente.

CSS personalizado – Para estilos tipo grid masonry.

JavaScript (ES6+)

Estructura de Carpetas y Archivos

pinterest/
├── public/                  # Archivos públicos
│   └── index.html
├── src/
│   ├── assets/              # Recursos como imágenes o íconos
│   ├── components/          # Componentes reutilizables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── PostCard.jsx
│   │   └── ...
│   ├── pages/               # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Crear.jsx
│   │   └── Explorar.jsx
│   ├── services/            # Servicios externos (ej. llamadas a API)
│   │   └── unsplashService.js
│   ├── style/               # Estilos CSS
│   │   └── PostCard.css
│   ├── App.jsx              # Rutas de la aplicación
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── .env                     # Variables de entorno
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Este archivo
Funcionalidades Implementadas
Formulario completo para crear un nuevo pin (con validaciones).

Visualización de imágenes en cuadrícula tipo masonry.

Página de exploración con imágenes desde la API de Unsplash.

Diseño responsivo para móviles, tablets y escritorio.

Preparado para mejoras como modo oscuro o login.

