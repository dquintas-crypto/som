# som
Sistemas Operativos Monopuesto


## 📘 VitePress — Instalación y puesta en Marcha

Este proyecto utiliza **VitePress** para generar documentación estática.
A continuación se detallan los pasos necesarios para instalar dependencias, iniciar el entorno de desarrollo y generar el sitio para producción.

---

## 📂 Estructura del proyecto

```
/
├── package.json
├── docs/
│   ├── index.md
│   ├── .vitepress/
│   │   ├── config.js
│   └── ...
└── ...
```

---

## 🚀 Requisitos previos

Asegúrate de tener instalado:

* **Node.js** (versión 18 o superior recomendada)
  👉 Para comprobarlo:

  ```bash
  node -v
  ```
  
---

## 📦 Instalación de dependencias

Ejecuta el siguiente comando en la raíz del proyecto (donde está *package.json*):

```bash
npm install
```

Si usas pnpm:

```bash
pnpm install
```

O con yarn:

```bash
yarn install
```

---

## 🧪 Ejecutar en modo desarrollo

Inicia el servidor de desarrollo de VitePress:

```bash
npm run docs:dev
```

Esto abrirá el sitio en:

```
http://localhost:5173/
```
---

## 🔨 Construir la versión de producción

Para generar los archivos estáticos listos para desplegar:

```bash
npm run docs:build
```

El contenido generado se almacenará en:

```
docs/.vitepress/dist
```

---

## 🌐 Vista previa de la build

Puedes previsualizar la versión optimizada antes de desplegar:

```bash
npm run docs:preview
```

---

## 🚀 Despliegue

La carpeta a desplegar es:

```
docs/.vitepress/dist
```

Esta carpeta se puede subir a cualquier hosting estático:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages
* Servidor estático propio

---


