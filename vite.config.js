import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "production" ? "/react-portfolio-web/" : "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            // Put all react dependencies in react-vendor
            if (id.match(/node_modules\/react|react-dom|react-router-dom/)) {
              return "react-vendor"
            }
            // Put all other dependencies in vendor
            return "vendor"
          }
        },
      },
    },
  },
})
