import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 3000, // El puerto en el que se ejecutará el servidor
    browser: "none", // No se abrirá un navegador al iniciar el servidor
    historyFallback: true, // Habilitar el historial de navegación
    open: false, // No se abrirá un navegador al iniciar el servidor
    spa: "client", // Configurar el servidor como una aplicación de una sola página (SPA)
    static: "dist", // La carpeta que contiene el código estático de la aplicación
    historyApiFallback: {
      index: "/index.html", // El archivo que se servirá cuando se solicite una ruta que no existe

      // Configurar las rutas que se deben ignorar
      rewrites: [
        {
          from: /^\/[^/]+$/,
          to: "/",
        },
      ],
    },
  },
});
