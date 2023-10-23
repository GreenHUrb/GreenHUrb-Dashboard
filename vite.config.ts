import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images/", import.meta.url)),
      "@icons": fileURLToPath(new URL("./src/assets/icons/", import.meta.url)),
      "@components": fileURLToPath(new URL("./src/components/", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/data/", import.meta.url)),
      "@HoC": fileURLToPath(new URL("./src/HoC/", import.meta.url)),
      "@hooks": fileURLToPath(new URL("./src/hooks/", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts/", import.meta.url)),
      "@libs": fileURLToPath(new URL("./src/libs/", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages/", import.meta.url)),
      "@redux": fileURLToPath(new URL("./src/redux/", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router/", import.meta.url)),
      "@services": fileURLToPath(new URL("./src/services/", import.meta.url)),
      // "@styles": fileURLToPath(new URL("./src/styles/", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils/", import.meta.url)),
      "@validators":fileURLToPath(new URL("./src/utils/validators", import.meta.url)),
    }
  },
  base: "/",
  server: {
    host: true,
    port: 4000,
    strictPort: true
  }
});
