# Alex & Sofia — Love Story

Una landing romántica, editorial y personalizable creada con React + Vite.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre la dirección local que muestra Vite (normalmente `http://localhost:5173`). Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

## Personalizar para otra pareja

Edita principalmente [src/data/couple.js](./src/data/couple.js). Ahí están los nombres, fecha de inicio, textos, línea de tiempo, galería, canción, carta y foto final.

### Sustituir imágenes

Coloca los archivos en `public/images/` y utiliza su ruta desde `src/data/couple.js`, por ejemplo:

```js
image: '/images/nuestra-foto.jpg'
```

Los SVG incluidos son placeholders visuales locales. `hero-photo.png` y `gallery-photo.png` son fotografías placeholder también locales. Sustituirlas no requiere cambiar componentes.

### Añadir la canción

Pon un MP3 en `public/music/`, por ejemplo `public/music/our-song.mp3`, y actualiza `song.file` si usas otro nombre. El reproductor no inicia la música automáticamente.

## Diseño y comportamiento

- El contador de días se calcula automáticamente desde `startDate`.
- Las imágenes fuera de la primera pantalla usan carga diferida.
- La galería se abre en un visor accesible y se cierra con Escape.
- Las transiciones respetan `prefers-reduced-motion`.

## Publicar en GitHub Pages

El repositorio ya incluye un workflow de GitHub Actions para publicar automáticamente en GitHub Pages cada vez que haya un `push` a la rama `main`.

1. Crea un repositorio vacío en GitHub.
2. En este proyecto, conecta el repositorio y publica el código:

```bash
git init -b main
git add .
git commit -m "Initial love story site"
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

3. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de despliegue.
4. Al finalizar el workflow, la página estará disponible en `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

Para un dominio personalizado, configura ese dominio en **Settings → Pages** y cambia `VITE_BASE_PATH` a `/` dentro del workflow antes de hacer el siguiente despliegue.
