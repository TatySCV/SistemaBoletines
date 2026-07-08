# Sistema de Boletines Informativos

Sistema web desarrollado para la creación y gestión de boletines informativos de extranjeros expulsados, permitiendo generar un formato visual institucional exportable en imagen.

## Versión actual

### v0.1.0 - Generador de Boletines

Primera versión funcional del sistema enfocada en la generación visual del boletín.

Esta versión permite completar información mediante formularios dinámicos y visualizar en tiempo real el formato final del boletín para su posterior exportación.

---

## Características principales

### Dashboard

- Vista general del sistema.
- Estadísticas iniciales mediante datos simulados.
- Últimos boletines generados.
- Componentes reutilizables preparados para conexión a base de datos.

---

### Generador de boletines

Formulario completo dividido por secciones:

#### Información general

- Fecha del boletín.
- Estado de expulsión.
- Fotografía del extranjero.
- Vista previa automática.

#### Datos personales

Campos disponibles:

- Nombres.
- Apellidos.
- Nacionalidad.
- Fecha de nacimiento.
- Género.
- Tipo de documento.
- Número de documento.

Funciones:

- Cálculo automático de edad.
- Selector de países con búsqueda.
- Conversión automática de formato visual.

---

#### Antecedentes

Permite registrar:

- Antecedentes en país extranjero.
- Antecedentes penales en Chile.

Características:

- Campos condicionales.
- El bloque aparece solamente si existe información registrada.
- Compatible con textos extensos.

---

#### Resolución de expulsión

Campos:

- Número de resolución.
- Fecha resolución.
- Servicio que dicta.
- Estado.

---

#### Línea de tiempo

Permite agregar eventos relevantes asociados al proceso.

Incluye:

- Fecha del evento.
- Descripción del evento.
- Vista tipo línea cronológica.

---

#### Información de vuelo

Campos opcionales:

- Aerolínea.
- Número de vuelo.
- Origen.
- Destino.
- Fecha y hora de salida.
- Fecha y hora de llegada.

Si no existe información de vuelo, la sección se omite automáticamente.

---

## Vista previa del boletín

El sistema genera un formato tipo afiche con:

- Diseño institucional.
- Fotografía principal.
- Estado destacado.
- Información personal.
- Antecedentes.
- Resolución.
- Línea de tiempo.
- Información de vuelo.
- Pie institucional.

La vista previa se actualiza automáticamente al completar los formularios.

---

## Exportación

Actualmente disponible:

✔ Exportar boletín en formato JPG.

El archivo generado mantiene:

- Formato vertical.
- Diseño completo.
- Imágenes cargadas.
- Información ingresada.

---

# Tecnologías utilizadas

## Frontend

- React
- Vite
- Tailwind CSS
- React Router DOM
- React Hook Form
- React Icons

---

## Librerías adicionales

- html2canvas
- jsPDF *(incluido para futuras versiones)*
- clsx

---

# Arquitectura del proyecto


```text
src
│
├── components
│   │
│   ├── layout
│   │
│   ├── ui
│   │
│   └── bulletins
│       │
│       ├── BulletinForm
│       ├── BulletinEditor
│       └── BulletinPoster
│
├── forms
│   └── bulletin
│
├── data
│
├── mocks
│
├── pages
│
├── routes
│
└── utils
```

---

# Componentes reutilizables

El sistema cuenta con componentes UI propios:

- Button
- Card
- Input
- Select
- SearchSelect
- Modal
- Table
- Badge
- Loader
- Section

Diseñados para mantener una interfaz consistente.

---

# Versionado

## v0.1.0

Estado:

✔ Completado

Incluye:

- Interfaz base.
- Dashboard inicial.
- Generador completo.
- Exportación JPG.

---

## Próxima versión

### v0.2.0

Objetivos:

- Integración con Supabase.
- Base de datos real.
- Registro de boletines.
- Historial.
- Edición de boletines creados.
- Filtros de búsqueda.

---

## Futuras versiones

### v0.3.0

Planificado:

- Autenticación.
- Gestión de usuarios.
- Roles:

  - Administrador.
  - Operador.
  - Supervisor.

- Control de permisos.

---

# Instalación

Clonar repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd SistemaBoletines
```

Instalar dependencias:

```bash
npm install
```

Ejecutar entorno local:

```bash
npm run dev
```

---

# Estado del proyecto

🚧 En desarrollo activo

Versión estable:

```
v0.1.0
```

Generador de boletines terminado y preparado para integración backend.

---

# Desarrollado con

React + Tailwind CSS