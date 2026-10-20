# Pre-entrega 1: Plataforma de Eventos e Inscripciones

## Descripción

Primera pre-entrega de Backend II. El objetivo es establecer la base arquitectónica de una API REST para una plataforma de eventos e inscripciones, organizada en capas y preparada para futuras ampliaciones.

## Tecnologías

* Node.js
* Express
* MongoDB
* Mongoose
* dotenv
* JavaScript con módulos ESM

## Instalación

1. Clonar el repositorio.

2. Instalar las dependencias:

   `npm install`

3. Configurar las variables de entorno utilizando el archivo `.env.example`.

## Variables de entorno

* `PORT`: puerto del servidor.
* `NODE_ENV`: entorno de ejecución.
* `MONGO_URL`: URL de conexión a MongoDB.
* `JWT_SECRET`: clave secreta para futuros procesos de autenticación.

## Ejecución

Iniciar el servidor con:

`npm start`

El servidor utiliza el puerto 8080 por defecto.

## Estructura del proyecto

```text
pre-entrega 1/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   └── env.js
│   ├── routes/
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── controllers/
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── services/
│   │   └── events.service.js
│   ├── repositories/
│   │   └── events.repository.js
│   ├── dao/
│   │   └── events.dao.js
│   ├── models/
│   │   ├── User.js
│   │   └── Event.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   └── utils/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Rutas disponibles

### GET /api/health

Verifica que el servidor esté activo.

Respuesta:

```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

### GET /api/events

Obtiene la lista de eventos.

Respuesta inicial:

```json
{
  "status": "success",
  "payload": []
}
```

### GET /api/sessions

Ruta inicial para sesiones, sin lógica de autenticación implementada.

## Arquitectura

El proyecto está organizado en capas para separar responsabilidades:

* **Config:** configuración de variables de entorno.
* **Routes:** definición de las rutas de la API.
* **Controllers:** gestión de solicitudes y respuestas HTTP.
* **Services:** lógica de negocio.
* **Repositories:** acceso a los datos desde la lógica de negocio.
* **DAO:** operaciones de acceso a datos.
* **Models:** esquemas Mongoose de las entidades User y Event.
* **Middlewares:** manejo global de errores.
* **Utils:** utilidades generales.

## Seguridad

El archivo `.gitignore` excluye `node_modules/` y `.env` para evitar subir dependencias y variables de entorno privadas al repositorio.

## Objetivo de la pre-entrega

Establecer una estructura arquitectónica inicial para la Plataforma de Eventos e Inscripciones, separando la configuración del servidor, las rutas, los controladores y las capas de acceso a datos. Esta base permitirá incorporar progresivamente funcionalidades de autenticación, autorización, gestión de eventos e inscripciones en las próximas entregas.
