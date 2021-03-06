import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "CharlesSatellite",
      fileName: (format) => `charles-satellite.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ["vue"],
      // input: {
      //   app: path.resolve(__dirname, "src/main.ts"),
      //   newsletter: path.resolve(__dirname, "src/main.ts"),
      // },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        // globals: {
        //   vue: "Vue",
        // },
      },
    },
  },
});
