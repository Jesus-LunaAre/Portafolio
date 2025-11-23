# Portafolio Web

Portafolio personal minimalista y funcional desarrollado con HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Diseño Minimalista**: Interfaz limpia y moderna
- **Totalmente Responsive**: Adaptado para todos los dispositivos
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones Sutiles**: Efectos visuales al hacer scroll
- **Formulario de Contacto**: Listo para integrar con servicios de email
- **Fácil de Personalizar**: Código limpio y bien comentado

## 📋 Secciones

- **Inicio**: Hero section con presentación
- **Sobre Mí**: Información personal y habilidades
- **Proyectos**: Galería de proyectos con detalles
- **Contacto**: Formulario y enlaces de contacto

## 🛠️ Tecnologías

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (Vanilla ES6+)

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/portafolio.git
```

2. Abre `index.html` en tu navegador o usa un servidor local:
```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server
```

## ✏️ Personalización

### 1. Información Personal

Edita `index.html` y actualiza:
- Tu nombre en la sección hero
- Descripción en "Sobre Mí"
- Habilidades en la sección de skills
- Enlaces de contacto (email, LinkedIn, GitHub)

### 2. Proyectos

Edita el array `projects` en `script.js`:

```javascript
const projects = [
    {
        title: "Mi Proyecto",
        description: "Descripción del proyecto",
        tech: ["HTML", "CSS", "JavaScript"],
        demo: "https://demo-url.com",
        code: "https://github.com/usuario/proyecto",
        icon: "🚀" // Emoji o puedes usar imágenes
    },
    // Agrega más proyectos...
];
```

### 3. Colores

Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e293b;
    /* ... más variables */
}
```

### 4. Formulario de Contacto

El formulario guarda automáticamente todos los mensajes en **localStorage** y puede enviarlos por email usando **Formspree**.

**Configuración de Formspree (Opcional pero recomendado):**
1. Crea cuenta en [formspree.io](https://formspree.io)
2. Obtén tu Form ID
3. Abre `script.js` y busca `FORMPREE_ENDPOINT`
4. Reemplaza `YOUR_FORM_ID` con tu Form ID real

**Ver mensajes guardados:**
- Abre la consola del navegador (F12)
- Ejecuta: `verMensajes()` para ver todos
- Ejecuta: `exportarMensajes()` para descargar como JSON
- Ejecuta: `verUltimoMensaje()` para ver el último

📄 Ver `FORMULARIO_INSTRUCCIONES.md` para más detalles.

## 🌐 Despliegue

### GitHub Pages

1. Sube tu código a GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu sitio estará disponible en `https://tu-usuario.github.io/portafolio`

### Otros servicios

- **Netlify**: Arrastra y suelta la carpeta
- **Vercel**: Conecta tu repositorio de GitHub
- **GitHub Pages**: Como se mencionó arriba

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la [MIT License](LICENSE).

## 👤 Autor

Tu Nombre - [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!

