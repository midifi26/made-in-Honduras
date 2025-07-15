# 💄 Caprichito Catracho - Tienda Online

¡Bienvenido a **Caprichito Catracho**!  
Una tienda online desarrollada como prueba técnica **fullstack web development**, donde podrás explorar productos de consumo Hondureño, con un diseño **SPA, mobile-first**, ordenamientos dinámicos, búsqueda avanzada, y más.

---

## 🌐 Tecnologías Utilizadas

### 🖥️ Frontend
- React (funcional)
- React Router DOM
- Fetch
- CSS (mobile-first, diseño responsive)

### 🛠️ Backend
- Node.js
- Express
- PostgreSQL
- `pg` para conexión a base de datos
- JSDoc para documentación
- Swagger

---

## 📦 Instalación Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/midifi26/made-in-Honduras
cd caprichito-catracho
```

### 2. Instalar dependencias

```bash
npm install

# Frontend
cd ../client
npm install
```

### 3. Configura la base de datos

- Crea una base de datos PostgreSQL (por ejemplo: `caprichito_db`).
- Carga los scripts SQL:

```bash
psql -U tu_usuario -d caprichito_db -f backend/db/schema.sql
psql -U tu_usuario -d caprichito_db -f backend/db/seed.sql
```

### 4. Variables de entorno (backend)

Crea un archivo `.env` en `backend/` con el siguiente contenido:

```env
 user: "", 
    host: "", 
    database: "", 
    password: "",
    port: 
```

### 5. Ejecutar la aplicación

```bash
# Backend
npm run dev

# Frontend
cd ../client
npm run dev
```
---

## ✨ Funcionalidades

- 📱 **Diseño mobile-first**: Navegación perfecta en móviles.
- 🔄 **Paginación dinámica**: 10 artículos por página.
- 🧭 **Controles de navegación**: botones “Anterior” y “Siguiente”.
- ⚙️ **Ordenamiento interactivo**: por nombre, precio o relevancia (asc/desc).
- 🧾 **Tarjetas de productos**: muestran nombre, precio y relevancia.
- 🔍 **Buscador inteligente**: por nombre de producto y/o fabricante.
- 🧑‍🏭 **Detalle del producto**: información completa del artículo y su fabricante.
- 💾 **Datos persistentes en PostgreSQL**.

---

## 🧑‍💻 Estructura del Proyecto

```
caprichito-catracho/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── db/
│   ├── tests/
│   └── app.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
└── README.md
```


## 📄 Documentación Técnica

- Documentación de endpoints generada con **Swagger**.
- Comentarios en el backend usando **JSDoc**.
---

## ❤️ Autor

Desarrollado con cariño por Michelle Diaz  
📫 Contacto: [midifi26@gmail.com]

---

## ⭐ Créditos

Esta aplicación fue realizada como parte de una **prueba técnica de desarrollo web fullstack**.  

Gracias por visitar **Caprichito Catracho** 🛍️✨

