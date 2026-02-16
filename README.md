# 📰 InnoPrint Informativo Nº 15 - Web Estática

Página web profesional y moderna con el Informativo corporativo de InnoPrint del 27 de enero de 2025.

## 🎯 Características

✅ **Diseño Profesional** - Interfaz moderna y limpia con colores corporativos InnoPrint
✅ **Totalmente Responsivo** - Compatible con desktop, tablet y mobile
✅ **Animaciones Suaves** - Transiciones elegantes y efectos visuales
✅ **Optimizado para Gerencia** - Presentación clara y profesional de datos
✅ **GitHub Pages Compatible** - Listo para desplegar como sitio estático
✅ **Sin Dependencias** - HTML, CSS y JavaScript puro

## 📁 Estructura del Proyecto

```
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos y diseño (CSS)
├── script.js           # Interactividades y animaciones (JavaScript)
├── logo.png            # Logo de InnoPrint
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## 🚀 Despliegue en GitHub Pages

### Opción 1: Repositorio Nuevo

1. **Crea un repositorio nuevo en GitHub**
   - Ve a https://github.com/new
   - Nombre: `nombre-del-repo`
   - Descripción: "InnoPrint Informativo - Página estática"

2. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo
   ```

3. **Copia los archivos**

   ```bash
   # Copia todos los archivos del proyecto aquí
   cp -r ruta/del/proyecto/* .
   ```

4. **Configura Git y sube**

   ```bash
   git add .
   git commit -m "🎉 Agregar Informativo InnoPrint Nº 15"
   git push -u origin main
   ```

5. **Activa GitHub Pages**
   - Ve a Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Haz clic en Save

6. **Accede a tu sitio**
   - Tu página estará en: `https://tu-usuario.github.io/nombre-del-repo`

### Opción 2: Repositorio Existente

Si ya tienes un repositorio, simplemente:

```bash
cd tu-repo
# Copia los archivos del proyecto
git add .
git commit -m "🎉 Agregar Informativo InnoPrint Nº 15"
git push
```

## ⚙️ Configuración Personalizada

### Cambiar Colores Corporativos

Edita las variables CSS en `styles.css`:

```css
:root {
  --primary-color: #0066cc; /* Color principal */
  --secondary-color: #ff6b35; /* Color secundario */
  --accent-color: #00d4ff; /* Color de acentos */
  --dark-bg: #0f1419; /* Fondo oscuro */
  /* ... más variables */
}
```

### Actualizar Contenido

Edita el archivo `index.html` para cambiar:

- Datos del informativo
- Nombres de colaboradores
- Fechas y eventos
- Cualquier información

### Cambiar Logo

Reemplaza `logo.png` con tu imagen. Asegúrate de que sea PNG con fondo transparente.

## 📊 Secciones Incluidas

- ✨ Encabezado profesional con logo
- 📝 Mensaje del Director
- 🏆 Hitos Destacados
- 🎉 Celebración de Aniversario
- 🏅 Reconocimientos y Antigüedad
- 📚 Capacitaciones 2025
- 🛡️ Prevención de Riesgos
- 👋 Nuevos Ingresos
- 💰 Beneficios Entregados
- 📢 Novedades Importantes
- 🏪 Premios Rifa
- 📞 Footer con información

## 🎨 Paleta de Colores

| Color   | Uso                               |
| ------- | --------------------------------- |
| #0066cc | Azul Primario - Títulos y acentos |
| #ff6b35 | Naranja - Datos destacados        |
| #00d4ff | Cian - Líneas decorativas         |
| #0f1419 | Gris Oscuro - Header y footer     |
| #f8f9fb | Gris Claro - Fondo general        |
| #ffffff | Blanco - Tarjetas y contenido     |

## 💡 Funcionalidades JavaScript

- 🎯 Scroll suave
- ✨ Animaciones al scroll
- 📊 Animación de números
- 📋 Copiar datos al portapapeles
- 🎨 Efectos hover interactivos
- 📱 Comportamiento responsivo optimizado

## 🔍 SEO y Metadatos

La página incluye:

- Title optimizado
- Meta viewport para responsive
- Favicon
- Estructura semántica HTML

## 📱 Compatibilidad

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores móviles
- ✅ Tablets

## ⚡ Rendimiento

- Tamaño: < 500KB
- Tiempo de carga: < 1 segundo
- Sin librerías externas
- Optimizado para 5G y 4G

## 🛠️ Desarrollo Local

Para ver la página en tu computadora:

1. **Abre en navegador directamente**

   ```bash
   # Windows
   start index.html

   # macOS
   open index.html

   # Linux
   xdg-open index.html
   ```

2. **O usa un servidor local**

   ```bash
   # Con Python 3
   python -m http.server 8000

   # Con Node.js (http-server)
   npx http-server
   ```

   Luego abre: http://localhost:8000

## 📄 Licencia

Contenido y diseño propiedad de InnoPrint SA.

## 📧 Soporte

Para cambios o mejoras, edita los archivos y haz push a GitHub.

---

**Creado:** 2025
**Versión:** 1.0
**Estado:** ✅ Listo para producción

🚀 ¡Tu página está lista para desplegar!
