# Portfolio Personal - Valentina Pinto

Portfolio profesional desarrollado con Astro, Tailwind CSS y JavaScript. Diseño minimalista con paleta de colores pastel, soporte multiidioma (ES/EN) y modo oscuro.


## 🚀 Características

- ✨ Diseño moderno y minimalista con colores pastel
- 🌓 Modo oscuro/claro con persistencia
- 🌍 Soporte multiidioma (Español/Inglés)
- 📱 Completamente responsive
- ⚡ Optimizado para rendimiento
- 🎨 Animaciones suaves y transiciones
- ♿ Accesible (ARIA labels, navegación por teclado)
- 🔍 SEO optimizado con meta tags

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utility-first
- JavaScript (ES6+)
- Google Fonts (Playfair Display, Poppins, Dancing Script)

## 📁 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   └── favicon.ico
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── data/           # Datos del portfolio
│   ├── i18n/           # Traducciones
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Páginas del sitio
│   ├── scripts/        # JavaScript del cliente
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.mjs # Configuración de Tailwind
└── package.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia servidor local en `localhost:4321`        |
| `npm run build`           | Construye el sitio para producción en `./dist/`  |
| `npm run preview`         | Vista previa del build localmente                |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                    |

## 🚀 Deployment a Vercel

Este proyecto está configurado para deployment óptimo en Vercel.


### Deployment Continuo

Una vez conectado a Vercel:
- Cada push a tu rama principal activa un deployment de producción
- Los pull requests crean deployments de preview automáticamente
- Puedes ver logs y estado en el dashboard de Vercel

### Traducciones

Edita `src/i18n/translations.js` para modificar textos en español e inglés.

## ⚡ Optimizaciones Implementadas

- ✅ Configuración unificada de Tailwind
- ✅ URL del sitio configurada para SEO
- ✅ Iconos SVG para theme toggle
- ✅ Preconnect para Google Fonts
- ✅ Imágenes optimizadas con formato WebP
- ✅ Variables CSS consistentes
- ✅ Build sin errores

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👀 Más Información

- [Documentación de Astro](https://docs.astro.build)
- [Discord de Astro](https://astro.build/chat)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
