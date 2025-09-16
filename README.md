This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
-----------------------------

**Guía de Creación: Web Corporativa con Next.js y shadcn/ui**
Esta guía detalla el proceso paso a paso para configurar y construir una página de inicio para una web corporativa utilizando Next.js, TailwindCSS y la librería de componentes shadcn/ui.

Paso 1: Configuración Inicial del Proyecto
Primero, creamos la estructura base de nuestro proyecto con Next.js.

Abre tu terminal.

Navega a la carpeta donde guardas tus proyectos (ej: cd Documents/Projects).

Ejecuta el siguiente comando para crear el proyecto:

Bash

npx create-next-app@latest innova-corporate-website --typescript --tailwind --eslint
Durante la instalación, asegúrate de seleccionar "Yes" para usar el App Router.

Una vez finalizado, entra en la carpeta del proyecto:

Bash

cd innova-corporate-website
Paso 2: Inicialización de shadcn/ui
Ahora, preparamos el proyecto para usar los componentes de shadcn/ui.

Dentro de la carpeta del proyecto, ejecuta el comando de inicialización:

Bash

npx shadcn@latest init
Acepta las opciones por defecto que te ofrezca la terminal. Esto creará la carpeta components/ui y configurará los estilos base.

Paso 3: Conexión con GitHub (Opcional pero recomendado)
Sube tu proyecto inicial a un repositorio de GitHub.

Añade todos los archivos para que Git los rastree:

Bash

git add .
Crea tu primer "commit" (una instantánea del proyecto):

Bash

git commit -m "Initial commit: Setup Next.js, TailwindCSS, and shadcn/ui"
Conecta tu proyecto local con tu repositorio de GitHub (reemplaza la URL):

Bash

git remote add origin https://github.com/tu-usuario/tu-repositorio.git
Sube el código a GitHub:

Bash

git push -u origin main
Paso 4: Iniciar el Servidor de Desarrollo
Para ver tu sitio web en tiempo real mientras trabajas, enciende el servidor local.

Ejecuta el comando:

Bash

npm run dev
Abre tu navegador y ve a http://localhost:3000. Verás la página de bienvenida de Next.js.

Paso 5: Construcción de la Página de Inicio
Ahora empezamos a construir la interfaz.

5.1 - Añadir Componentes Base de shadcn/ui
Cada vez que necesites un nuevo componente (botón, tarjeta, etc.), debes añadirlo desde la terminal.

Detén el servidor (presiona Ctrl + C en la terminal).

Añade los componentes que necesitarás para la página de inicio:

Bash

npx shadcn@latest add button
npx shadcn@latest add card
Vuelve a iniciar el servidor:

Bash

npm run dev
5.2 - Crear un Componente Personalizado (ServiceCard)
Crearemos una tarjeta reutilizable para mostrar nuestros servicios.

Dentro de la carpeta components, crea una nueva carpeta llamada shared.

Dentro de components/shared, crea un nuevo archivo llamado ServiceCard.tsx.

Pega el siguiente código en ServiceCard.tsx y guarda:

TypeScript

// components/shared/ServiceCard.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export function ServiceCard({ title, description, imageUrl, slug }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-xl hover:-translate-y-2">
      <CardHeader className="p-0">
        <Image
          src={imageUrl}
          alt={`Servicio de ${title}`}
          width={400}
          height={250}
          className="object-cover w-full h-48"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold text-blue-900 mb-2">{title}</CardTitle>
        <CardDescription className="text-gray-600 mb-4 h-24">
          {description}
        </CardDescription>
        <a href={`/services/${slug}`} className="font-bold text-blue-500 inline-flex items-center group-hover:underline">
          Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
}
5.3 - Montar la Página Principal (page.tsx)
Finalmente, unimos todas las piezas en la página de inicio.

Abre el archivo app/page.tsx.

Borra todo su contenido.

Pega el siguiente código completo y guarda el archivo:

TypeScript

// app/page.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/shared/ServiceCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-900 mb-6">
            Maximiza la Rentabilidad de tu Hotel.
            <span className="block text-blue-500">Externaliza con Inteligencia.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
            Optimizamos tus operaciones, desde el servicio de pisos hasta la gestión completa, 
            para que te centres en lo que realmente importa: la experiencia de tus huéspedes.
          </p>
          <div className="flex justify-center gap-4">
            <Button>Solicitar Auditoría Gratuita</Button>
            <Button variant="outline">Ver Casos de Éxito <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 mt-2">Soluciones integrales para la gestión hotelera.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard title="Housekeeping & Pisos" description="Garantizamos la máxima limpieza y eficiencia en la gestión de habitaciones, mejorando la satisfacción del huésped." imageUrl="/placeholder.svg" slug="housekeeping" />
            <ServiceCard title="Restauración y F&B" description="Optimizamos la gestión de restaurantes, bares y eventos para maximizar ingresos y calidad del servicio." imageUrl="/placeholder.svg" slug="restauracion" />
            <ServiceCard title="Mantenimiento Integral" description="Nos encargamos del mantenimiento preventivo y correctivo para que tus instalaciones estén siempre perfectas." imageUrl="/placeholder.svg" slug="mantenimiento" />
          </div>
        </div>
      </section>
    </main>
  );
}
¡Listo! Al guardar, tu localhost:3000 mostrará la nueva página de inicio con ambas secciones.

Errores Comunes (Troubleshooting)
Error: Module not found: Can't resolve '@/components/...'

Causa 1: Olvidaste añadir el componente con npx shadcn@latest add [componente].

Causa 2: El archivo que creaste (ServiceCard.tsx) tiene un nombre incorrecto (cuidado con las mayúsculas) o está en la carpeta equivocada. Revisa la estructura del Paso 5.2.

Solución: Detén el servidor (Ctrl + C), corrige el nombre o la ubicación del archivo, y vuelve a iniciar el servidor (npm run dev).
