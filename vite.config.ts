import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  // onde vivem seus fontes e variáveis de ambiente
  root: path.resolve(__dirname, "client"),
  envDir: path.resolve(__dirname),

  // para a Vercel achar o build
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.0.4",
    "@tailwindcss/vite": "^4.1.17",
    "tailwindcss": "^4.1.14",
    "vite": "^7.1.7",
    "typescript": "5.6.3"
  }
}
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["client/src/*"],
      "@shared/*": ["shared/*"],
      "@assets/*": ["attached_assets/*"]
    }
  },
  "include": ["client/src", "shared", "attached_assets", "vite.config.ts"]
}
/
├─ client/
│  └─ src/   ← seu código React
├─ shared/   (opcional)
├─ attached_assets/ (opcional)
├─ package.json
├─ tsconfig.json
└─ vite.config.ts

  
