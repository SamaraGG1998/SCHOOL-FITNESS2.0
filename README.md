# Guía de Edición y Actualización Manual - School Fitness

Esta carpeta `public/` contiene toda la página web con sus 8 secciones completas, interactividad, carrito y modal emergente, diseñada específicamente para que puedas **editar todo el contenido de forma manual y directa, sin necesidad de bases de datos complejas ni servidores especiales**.

---

## 📁 Estructura de la carpeta `public/`

```text
public/
├── index.html         # Archivo principal con las 8 secciones editables
├── README.md          # Esta guía de edición
├── css/
│   └── styles.css     # Estilos CSS, variables de colores (:root) y diseño responsivo
├── js/
│   └── app.js         # Lógica de navegación, modal emergente, blog, calendario y carrito
├── images/            # Fotografías de Maggie, cursos, galería y fondos
│   ├── CURSO1.JPG     # Certificación Pilates Mat
│   ├── CURSO2.JPG     # Certificación Reformer
│   ├── CURSO3.JPG     # Pilates Pre y Postnatal
│   ├── MAGGIE.jpg     # Foto de la fundadora (sección inicio)
│   ├── MAGGIE-1.jpg   # Foto de la fundadora (sección historia)
│   ├── IMG1.jpg       # Foto banner principal y galería
│   ├── IMG2.jpg       # Foto comunidad y galería
│   ├── IMG3.jpg       # Foto estudio y galería
│   └── LOGO.jfif      # Logotipo de la marca
└── src/               # Componentes modulares en React/TypeScript
```

---

## 🚀 Cómo ver la página en tu navegador

Solo haz **doble clic en `index.html`** y se abrirá en tu navegador (Chrome, Edge, Safari, Firefox) funcionando al 100% con todas las pestañas, modales y carrito.

---

## 📌 Guía de Actualización Manual

### 1. ⚡ Modificar el curso destacado en la Ventana Emergente (Modal)
Abre `public/js/app.js` y en las primeras líneas verás el objeto `PROMO_COURSE`:
```javascript
const PROMO_COURSE = {
  id: 2,
  badge: "⚡ Próximo Inicio",
  title: "Formación de Instructor Reformer",
  date: "15 de Mayo, 2025",
  modalidad: "Híbrido · 16 semanas (Online + Mentorías)",
  description: "Últimos 3 cupos disponibles con precio especial de preventa...",
  image: "images/CURSO2.JPG"
};
```
*Puedes cambiar la fecha, el título o la imagen aquí mismo.* El modal se muestra suavemente a los 1.2 segundos y no vuelve a molestar si el usuario lo cierra durante su visita.

---

### 2. 📅 Actualizar o agregar fechas en el Calendario
Abre `public/index.html` y busca `<!-- VISTA 3: CALENDARIO -->`.
Cada evento es un bloque `<article class="calendar-card" data-category="cert">` con este formato fácil de duplicar y modificar:
```html
<article class="calendar-card" data-category="cert"> <!-- cert, workshop o masterclass -->
  <div class="calendar-date-badge">
    <span class="day">15</span>
    <span class="month">Mayo</span>
    <span class="year">2025</span>
  </div>
  <div class="calendar-info">
    <div class="calendar-tags">
      <span class="calendar-tag highlight">⚡ Convocatoria principal</span>
      <span class="calendar-tag">Híbrido · 16 semanas</span>
    </div>
    <h3>Formación de Instructor Reformer</h3>
    <p>Descripción del evento o curso...</p>
  </div>
  <div class="calendar-action">
    <span class="spots">¡Últimos 3 cupos!</span>
    <button class="btn btn-dark" onclick="addToCart(2)">Inscribirme</button>
  </div>
</article>
```

---

### 3. 🖼️ Agregar o cambiar fotos en la Galería
Todas las fotos se muestran de forma **100% uniforme con el mismo tamaño** (`aspect-ratio: 1/1` cuadrado con ajuste `object-fit: cover`), y cuentan con **flechas de navegación anterior / siguiente**, soporte para teclado y gestos táctiles (*swipe*) en celulares:

1. Coloca tu imagen dentro de `public/images/`.
2. En `public/js/app.js`, agrégala al catálogo `GALLERY_PHOTOS`:
```javascript
{
  id: 10,
  image: "images/tu-foto.jpg",
  title: "Título de la foto",
  caption: "Descripción detallada de la foto",
  category: "reformer", // reformer, mat, o studio
  categoryLabel: "Reformer"
}
```
3. En `public/index.html`, en `<!-- VISTA 4: GALERÍA DE FOTOS -->`, agrega su tarjeta para el grid:
```html
<div class="gallery-item" data-category="reformer" onclick="openGalleryPhoto(9)">
  <img src="images/tu-foto.jpg" alt="Título" loading="lazy" />
  <div class="gallery-overlay">
    <span class="cat">Reformer</span>
    <h4>Título de la foto</h4>
    <span class="click-hint">Ampliar foto ↗</span>
  </div>
</div>
```
*En el visor:*
* Puedes usar las **flechas flotantes en los laterales**, los **botones táctiles inferiores en celular**, deslizar con el dedo (*swipe* izquierda/derecha), o presionar las **flechas del teclado** (`←` y `→`).

---

### 4. 📝 Agregar o editar artículos en el Blog
* **Las tarjetas en la lista**: Se editan en `public/index.html` dentro de `<!-- VISTA 6: BLOG -->`.
* **El texto completo para leer**: Se edita en `public/js/app.js` en la variable `BLOG_ARTICLES`:
```javascript
const BLOG_ARTICLES = {
  1: {
    title: "Tu título",
    category: "Metodología",
    date: "28 de Abril, 2025",
    readTime: "4 min de lectura",
    content: `<p>Párrafos de tu artículo aquí...</p>`
  }
};
```

---

### 5. ✉️ Configurar el Formulario de Contacto
Abre `public/js/app.js` en la línea 12:
```javascript
const CONTACT_EMAIL = "hola@schoolfitness.com";
```
Reemplaza `"hola@schoolfitness.com"` por la dirección donde deseas recibir los mensajes. Cuando una alumna presione **"Enviar mensaje por correo"**, se abrirá automáticamente su cliente de correo (Gmail, Outlook, Mail de Mac, etc.) con el asunto y todos los campos (nombre, teléfono, curso de interés y mensaje) listos para enviar.

---

### 6. 🎨 Cambiar colores y fuentes
Abre `public/css/styles.css` y modifica las variables de `:root`:
```css
:root {
  --navy: #1b2b4b;        /* Azul oscuro principal */
  --peach: #b8845a;       /* Color acento cálido */
  --paper: #faf8f6;       /* Fondo suave */
  --serif: 'Italiana', Georgia, serif;
  --sans: 'DM Sans', sans-serif;
}
```
