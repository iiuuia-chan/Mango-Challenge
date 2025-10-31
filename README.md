# Test Técnico QA – Cypress

Este proyecto contiene una suite básica de pruebas automatizadas con **Cypress**, desarrollada como parte de una evaluación técnica.  
Las pruebas validan el flujo funcional de la aplicación https://buggy.justtestit.org, incluyendo navegación, visibilidad de elementos y validaciones de login.

---

## Requisitos

- Node.js v18 o superior (probado con Node 24.2.0)
- npm (probado con versión 11.3.0)
- Acceso a internet (la aplicación es pública)
- Cypress ^15.5.0 (instalado automáticamente con `npm install`)

---

## Instalación

### Clonar el repositorio y luego instalar las dependencias:

```bash
git clone <url_del_repositorio>
cd hu2
npm install
```

### Configuración de entorno

### antes de ejecutar las pruebas, crear un archivo llamado cypress.env.json en la raíz del proyecto con el siguiente formato:

```bash
{
  "USER_LOGIN": "correo_del_usuario",
  "USER_PASSWORD": "contraseña",
  "BASE_URL": "https://buggy.justtestit.org"
}
```

> El archivo no debe subirse a GitHub y ya se encuentra en el .gitignore.
> Las credenciales de prueba serán compartidas de forma privada.

## Ejecución

### Abrir la interfaz interactiva de Cypress:

```bash
npx cypress open
```

### O ejecutar las pruebas en modo consola:

```bash
npx cypress run
```

## Estructura del proyecto

```bash
HU2/
│
├── cypress/
│   ├── downloads/           # Archivos generados por Cypress (screenshots/videos)
│   ├── e2e/                 # Carpeta principal de pruebas end-to-end
│   │   └── HU2.cy.js        # Especificación de prueba principal (User Story 2)
│   ├── fixtures/            # Datos de prueba estáticos (example.json)
│   └── support/             # Archivos de soporte y configuración global
│       ├── commands.js      # Comandos personalizados (login, sesión)
│       └── e2e.js           # Hooks y configuración común
│
├── node_modules/
├── .gitignore
├── cypress.config.js
├── cypress.env.json         # Variables de entorno (no incluido en el repo público)
├── cypress.env.json.example # Ejemplo de configuración de entorno
├── package.json
├── package-lock.json
└── README.md
```

## Alcance de las pruebas

### Las pruebas cubren los siguientes criterios funcionales:

- Visualización del modelo: Validación de la página de detalle, especificaciones y votos.

- Comportamiento de usuario invitado: Restricción de acciones como votar o comentar.

- Inicio de sesión y comentario: Validación de flujo de autenticación y envío de comentario.

- Estructura de tabla: Verificación de encabezados en la sección de comentarios.

### Notas

> La prueba de comentario deja un registro real en el sitio, por lo que el usuario de prueba solo debe ejecutarse una vez por modelo.

> El objetivo de esta automatización es demostrar manejo de Cypress, intercepts y aserciones, no mantener una suite repetible sobre un entorno productivo.

> Entorno utilizado: Windows 10, Node.js 24.2.0, npm 11.3.0.

> Autor: Yuya Yamawaki
> Proyecto: Prueba Técnica QA – Cypress
