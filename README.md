# 📚 Books List - Prueba Técnica Next.js

Aplicación web desarrollada con Next.js 14+ y TypeScript que consume la API pública de Gutendex para mostrar una lista de libros.

## 🚀 Demo en Vivo

[Ver Demo](https://consumo-api-nxt.vercel.app/)

## 📋 Características

- ✅ Consumo de API REST pública (Gutendex)
- ✅ TypeScript para tipado estático y manejo de errores
- ✅ Manejo de estados: loading, success y error
- ✅ Interfaz responsive con Tailwind CSS
- ✅ Componentes reutilizables
- ✅ Buenas prácticas de Next.js App Router

## 🛠️ Tecnologías Utilizadas

- **Next.js 14+** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Gutendex API** - API de libros del Proyecto Gutenberg

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/alvarolinares-dev/consumo_api_nxt.git
cd books-app
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
books-list/
├── app/
│   ├── components/
│   │   └── BooksList.tsx      # Componente principal
│   ├── layout.tsx              # Layout raíz
│   └── page.tsx                # Página principal
├── public/                     # Archivos estáticos
├── .eslintrc.json             # Configuración ESLint
├── tsconfig.json              # Configuración TypeScript
├── tailwind.config.ts         # Configuración Tailwind
└── package.json               # Dependencias
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Ejecutar en desarrollo
npm run build    # Compilar para producción
npm run start    # Ejecutar en producción
npm run lint     # Ejecutar linter
```

## 📝 Implementación Técnica

### Tipado TypeScript

Se definieron las siguientes interfaces para garantizar type-safety:

```typescript
interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface Book {
  id: number;
  title: string;
  authors: Author[];
}
```

### Manejo de Estados

El componente implementa tres estados principales:

1. **Loading**: Muestra un spinner mientras carga los datos
2. **Error**: Muestra mensaje de error con opción de reintentar
3. **Success**: Renderiza la lista de 10 libros

### API Endpoint

```
GET https://gutendex.com/books/?page=1
```

## 🎯 Criterios Cumplidos

- [x] Proyecto estructurado con Next.js 14+ y TypeScript
- [x] Componente `BooksList.tsx` en carpeta components
- [x] Consumo de API con fetch
- [x] Mapeo y visualización de primeros 10 libros + primer autor
- [x] Interfaces TypeScript para Book y Author
- [x] Manejo de estados: loading, success, error

## 🚀 Despliegue

La aplicación está desplegada en Vercel. Para desplegar tu propia versión:

```bash
npm install -g vercel
vercel
```

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@alvarolinares-dev](https://github.com/alvarolinares-dev)
- LinkedIn: [Perfil de Linkdn](https://www.linkedin.com/in/alvaro-linares-a9459a224/)


---

⭐ **Nota**: Este proyecto fue desarrollado como parte de una prueba técnica para demostrar conocimientos en Next.js, TypeScript y consumo de APIs.
